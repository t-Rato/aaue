package pt.aaue.backend.controller;
import pt.aaue.backend.model.*;
import pt.aaue.backend.repository.*;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/equipa")
@CrossOrigin(origins = "http://localhost:5173")
public class ControladorEquipa {

    @Autowired
    private RepositorioGrupo repositorioGrupo;

    @Autowired
    private RepositorioSubGrupo repositorioSubGrupo;

    @Autowired
    private RepositorioMembro repositorioMembro;

    @GetMapping
    public List<Grupo> getTudo() {
        return repositorioGrupo.findAll(Sort.by("ordem"));
    }

    @PostMapping("/subgrupo")
    public void criarSubgrupo(
            @RequestParam Long grupoId,
            @RequestParam String nome,
            @RequestParam(required = true) String descricao,
            @RequestParam(required = true) String email,
            @RequestParam int ordem
    ) {
        Grupo g = repositorioGrupo.findById(grupoId).orElseThrow();

        SubGrupo s = new SubGrupo();
        s.setNome(nome);
        s.setDescricao(descricao);
        s.setEmail(email);
        s.setOrdem(ordem);
        s.setGrupo(g);

        repositorioSubGrupo.save(s);
    }

    @DeleteMapping("/subgrupo/{id}")
    public void apagarSubgrupo(@PathVariable Long id) {

        SubGrupo s = repositorioSubGrupo.findById(id).orElseThrow();

        for (Membro m : s.getMembros()) {
            if (m.getFotoUrl() != null) {
                try {
                    Files.deleteIfExists(Paths.get(m.getFotoUrl()));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        repositorioSubGrupo.delete(s);
    }

    @PostMapping("/membro")
    public void criarMembro(
            @RequestParam String nome,
            @RequestParam String cargo,
            @RequestParam int ordem,
            @RequestParam(required = false) Long grupoId,
            @RequestParam(required = false) Long subgrupoId,
            @RequestParam(required = false) MultipartFile foto
    ) throws Exception {

        Membro m = new Membro();
        m.setNome(nome);
        m.setCargo(cargo);
        m.setOrdem(ordem);

        if (foto != null && !foto.isEmpty()) {
            String nomeFicheiro =
                    System.currentTimeMillis() + "_" + foto.getOriginalFilename();

            Path caminho = Paths.get("equipa").resolve(nomeFicheiro);
            Files.createDirectories(caminho.getParent());
            Files.write(caminho, foto.getBytes());

            m.setFotoUrl("equipa/" + nomeFicheiro);
        }

        if (subgrupoId != null) {
            SubGrupo s = repositorioSubGrupo.findById(subgrupoId).orElseThrow();
            m.setSubgrupo(s);
        } else {
            Grupo g = repositorioGrupo.findById(grupoId).orElseThrow();
            m.setGrupo(g);
        }

        repositorioMembro.save(m);
    }

    @DeleteMapping("/membro/{id}")
    public void apagarMembro(@PathVariable Long id) {

        Membro m = repositorioMembro.findById(id).orElseThrow();

        if (m.getFotoUrl() != null) {
            try {
                Path caminho = Paths.get(m.getFotoUrl());
                Files.deleteIfExists(caminho);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        repositorioMembro.delete(m);
    }

    @PutMapping("/membro/{id}/mover")
    public void moverMembro(
            @PathVariable Long id,
            @RequestParam String direcao
    ) {
        Membro m = repositorioMembro.findById(id).orElseThrow();

        List<Membro> lista =
                m.getSubgrupo() != null
                        ? m.getSubgrupo().getMembros()
                        : m.getGrupo().getMembros();

        trocarOrdem(lista, m, direcao);

        repositorioMembro.saveAll(lista);
    }

    @PutMapping("/subgrupo/{id}/mover")
    public void moverSubgrupo(
            @PathVariable Long id,
            @RequestParam String direcao
    ) {
        SubGrupo s = repositorioSubGrupo.findById(id).orElseThrow();

        List<SubGrupo> lista = s.getGrupo().getSubgrupos();

        trocarOrdem(lista, s, direcao);

        repositorioSubGrupo.saveAll(lista);
    }

    private <T extends Ordenavel> void trocarOrdem(
            List<T> lista,
            T item,
            String direcao
    ) {
        int idx = lista.indexOf(item);

        if (direcao.equals("up") && idx > 0) {
            swap(lista, idx, idx - 1);
        }

        if (direcao.equals("down") && idx < lista.size() - 1) {
            swap(lista, idx, idx + 1);
        }
    }

    private <T extends Ordenavel> void swap(List<T> lista, int i, int j) {
        int o = lista.get(i).getOrdem();
        lista.get(i).setOrdem(lista.get(j).getOrdem());
        lista.get(j).setOrdem(o);
    }
}
package pt.aaue.backend.controller;

import pt.aaue.backend.model.Noticia;
import pt.aaue.backend.repository.RepositorioNoticia;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.time.LocalDate;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;

@RestController
@RequestMapping("/api/noticias")
@CrossOrigin(origins = "http://localhost:5173")
public class ControladorNoticia {

    @Autowired
    private RepositorioNoticia repositorioNoticia;

    @Transactional(readOnly = true)
    @GetMapping
    public List<Noticia> getNoticias() {
        return repositorioNoticia.findAllOrderByIdDesc();
    }

    @Transactional(readOnly = true)
    @GetMapping(params = {"page", "size"})
    public List<Noticia> getNoticiasPaginadas(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "5") int size) {

        Pageable pageable = PageRequest.of(
            page - 1,
            size,
            Sort.by(Sort.Direction.DESC, "id")
        );

        return repositorioNoticia.findAll(pageable).getContent();
    }

    @PostMapping
    public Noticia criarNoticia(@RequestBody Noticia noticia) {
        return repositorioNoticia.save(noticia);
    }

    @PostMapping("/upload")
    public ResponseEntity<Noticia> criarNoticiaComImagem(
            @RequestParam("titulo") String titulo,
            @RequestParam("breveDesc") String breveDesc,
            @RequestParam("descricao") String descricao,
            @RequestParam("data") String data,
            @RequestParam("imagem") MultipartFile imagem) throws IOException {

        String nomeFicheiro = System.currentTimeMillis() + "_" + imagem.getOriginalFilename();

        Path caminho = Paths.get("uploads/" + nomeFicheiro);
        Files.createDirectories(caminho.getParent());
        Files.write(caminho, imagem.getBytes());

        Noticia noticia = new Noticia();
        noticia.setTitulo(titulo);
        noticia.setBreveDesc(breveDesc);
        noticia.setDescricao(descricao);
        noticia.setData(LocalDate.parse(data));
        noticia.setImagemUrl("uploads/" + nomeFicheiro);

        return ResponseEntity.ok(repositorioNoticia.save(noticia));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagarNoticia(@PathVariable Long id) {
        Noticia noticia = repositorioNoticia.findById(id).orElse(null);

        if (noticia != null) {
            if (noticia.getImagemUrl() != null) {
                Path caminho = Paths.get(noticia.getImagemUrl());
                try {
                    Files.deleteIfExists(caminho);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            repositorioNoticia.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
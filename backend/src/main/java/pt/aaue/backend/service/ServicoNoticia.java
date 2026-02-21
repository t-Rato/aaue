package pt.aaue.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;
import pt.aaue.backend.model.Noticia;
import pt.aaue.backend.repository.RepositorioNoticia;

@Service
public class ServicoNoticia {
    
    private final RepositorioNoticia repositorio;

    public ServicoNoticia(RepositorioNoticia repositorio) {
        this.repositorio = repositorio;
    }

    public List<Noticia> getTodasNoticias() {
        return repositorio.findAll();
    }

    public Noticia save(Noticia noticia) {
        return repositorio.save(noticia);
    }
}
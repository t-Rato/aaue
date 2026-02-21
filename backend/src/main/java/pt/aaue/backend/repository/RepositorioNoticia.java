package pt.aaue.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pt.aaue.backend.model.Noticia;

public interface RepositorioNoticia extends JpaRepository<Noticia, Long> {
}
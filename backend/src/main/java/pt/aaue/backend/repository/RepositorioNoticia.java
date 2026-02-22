package pt.aaue.backend.repository;
import pt.aaue.backend.model.Noticia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RepositorioNoticia extends JpaRepository<Noticia, Long> {

    @Query("SELECT n FROM Noticia n ORDER BY n.id DESC")
    List<Noticia> findAllOrderByIdDesc();
}
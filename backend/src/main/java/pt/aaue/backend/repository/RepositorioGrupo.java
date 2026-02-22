package pt.aaue.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pt.aaue.backend.model.Grupo;

public interface RepositorioGrupo extends JpaRepository<Grupo, Long> {}
package pt.aaue.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pt.aaue.backend.model.Membro;

public interface RepositorioMembro extends JpaRepository<Membro, Long> {}
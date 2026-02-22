package pt.aaue.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pt.aaue.backend.model.Grupo;
import pt.aaue.backend.repository.RepositorioGrupo;

@Configuration
public class InicializadorEquipa {

    @Bean
    CommandLineRunner initGrupos(RepositorioGrupo repositorioGrupo) {
        return args -> {

            if (repositorioGrupo.count() > 0) return;

            repositorioGrupo.save(new Grupo("Presidência", "simples", 0));
            repositorioGrupo.save(new Grupo("Gabinete de Apoio à Presidência", "simples", 1));
            repositorioGrupo.save(new Grupo("Setores", "multiplo", 2));
            repositorioGrupo.save(new Grupo("Secções Autónomas", "multiplo", 3));
            repositorioGrupo.save(new Grupo("Assembleia Magna", "simples", 4));
            repositorioGrupo.save(new Grupo("Conselho Fiscal", "simples", 5));
        };
    }
}
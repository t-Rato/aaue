package pt.aaue.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        String uploadPath = Paths.get("uploads").toFile().getAbsolutePath();
        String equipaPath = Paths.get("equipa").toFile().getAbsolutePath();

        registry
            .addResourceHandler("/uploads/**")
            .addResourceLocations("file:" + uploadPath + "/")
            .setCachePeriod(3600)
            .resourceChain(true);

        registry
            .addResourceHandler("/equipa/**")
            .addResourceLocations("file:" + equipaPath + "/")
            .setCachePeriod(3600)
            .resourceChain(true);
    }
}
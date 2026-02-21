package pt.aaue.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Lob;
import jakarta.persistence.PrePersist;

import java.time.LocalDate;

@Entity
public class Noticia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String breveDesc;

    @Lob
    private String descricao;
    
    private LocalDate data;
    private String imagemUrl;

    public Noticia() {}

    public Noticia(String titulo, String breveDesc, String descricao, String imagemUrl) {
        this.titulo = titulo;
        this.breveDesc = breveDesc;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setBreveDesc(String breveDesc) {
        this.breveDesc = breveDesc;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public String getBreveDesc() {
        return this.breveDesc;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public LocalDate getData() {
        return this.data;
    }

    public String getImagemUrl() {
        return this.imagemUrl;
    }

    @PrePersist
    private void onCreate() {
        this.data = LocalDate.now();
    }
}
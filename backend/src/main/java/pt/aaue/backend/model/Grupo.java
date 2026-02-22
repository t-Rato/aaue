package pt.aaue.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Grupo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String tipo;
    private int ordem;

    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("ordem ASC")
    private List<SubGrupo> subgrupos;

    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("ordem ASC")
    private List<Membro> membros;

    public Grupo() {}

    public Grupo(String nome, String tipo, int ordem) {
        this.nome = nome;
        this.tipo = tipo;
        this.ordem = ordem;
    }

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getTipo() { return tipo; }
    public int getOrdem() { return ordem; }
    public List<SubGrupo> getSubgrupos() { return subgrupos; }
    public List<Membro> getMembros() { return membros; }

    public void setNome(String nome) { this.nome = nome; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public void setOrdem(int ordem) { this.ordem = ordem; }
}
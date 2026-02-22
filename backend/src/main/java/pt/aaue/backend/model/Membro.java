package pt.aaue.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Membro implements Ordenavel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String cargo;
    private int ordem;
    private String fotoUrl;

    @ManyToOne
    @JsonIgnore
    private Grupo grupo;

    @ManyToOne
    @JsonIgnore
    private SubGrupo subgrupo;

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getCargo() { return cargo; }
    public int getOrdem() { return ordem; }

    public void setNome(String nome) { this.nome = nome; }
    public void setCargo(String cargo) { this.cargo = cargo; }
    public void setOrdem(int ordem) { this.ordem = ordem; }

    public Grupo getGrupo() { return grupo; }
    public void setGrupo(Grupo grupo) { this.grupo = grupo; }

    public SubGrupo getSubgrupo() { return subgrupo; }
    public void setSubgrupo(SubGrupo subgrupo) { this.subgrupo = subgrupo; }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }
}
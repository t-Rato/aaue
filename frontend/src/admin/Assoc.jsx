import "./Assoc.css";
import { useState, useEffect } from "react";
import {
    ChevronRight,
    ChevronLeft,
    ChevronUp,
    ChevronDown,
    Trash2,
    Plus,
    X
} from "lucide-react";

function Assoc() {
    const [grupos, setGrupos] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState(null);
    const [subGrupoSelecionado, setSubGrupoSelecionado] = useState(null);

    const [modalAberto, setModalAberto] = useState(false);
    const [modalSubgrupoAberto, setModalSubgrupoAberto] = useState(false);

    const [novoNomeSubgrupo, setNovoNomeSubgrupo] = useState("");
    const [novaDescricaoSubgrupo, setNovaDescricaoSubgrupo] = useState("");
    const [novoEmailSubgrupo, setNovoEmailSubgrupo] = useState("");

    const [novoMembro, setNovoMembro] = useState({
        nome: "",
        cargo: "",
        foto: null
    });

    const carregarEquipa = () => {
        fetch("http://localhost:8081/api/equipa")
            .then(r => r.json())
            .then(data => {
                setGrupos(data);

                if (!grupoSelecionado && data.length > 0) {
                    setGrupoSelecionado(data[0]);
                    setSubGrupoSelecionado(null);
                    return;
                }

                if (grupoSelecionado) {
                    const g = data.find(x => x.id === grupoSelecionado.id);
                    setGrupoSelecionado(g || data[0]);

                    if (subGrupoSelecionado && g) {
                        const s = g.subgrupos.find(
                            x => x.id === subGrupoSelecionado.id
                        );
                        setSubGrupoSelecionado(s || null);
                    }
                }
            });
    };

    useEffect(() => {
        carregarEquipa();
    }, []);

    let membros = [];
    if (grupoSelecionado) {
        if (grupoSelecionado.tipo === "simples") {
            membros = grupoSelecionado.membros || [];
        } else if (subGrupoSelecionado) {
            membros = subGrupoSelecionado.membros || [];
        }
    }

    const criarSubgrupo = () => {
        const params = new URLSearchParams();
        params.append("grupoId", grupoSelecionado.id);
        params.append("nome", novoNomeSubgrupo);
        params.append("descricao", novaDescricaoSubgrupo);
        params.append("email", novoEmailSubgrupo);
        params.append("ordem", grupoSelecionado.subgrupos.length);

        fetch("http://localhost:8081/api/equipa/subgrupo", {
            method: "POST",
            body: params
        }).then(() => {
            setModalSubgrupoAberto(false);
            setNovoNomeSubgrupo("");
            setNovaDescricaoSubgrupo("");
            setNovoEmailSubgrupo("");
            carregarEquipa();
        });
    };

    const removerSubgrupo = (id) => {
        fetch(`http://localhost:8081/api/equipa/subgrupo/${id}`, {
            method: "DELETE"
        }).then(carregarEquipa);
    };

    const moverSubgrupo = (id, direcao) => {
        fetch(
            `http://localhost:8081/api/equipa/subgrupo/${id}/mover?direcao=${direcao}`,
            { method: "PUT" }
        ).then(carregarEquipa);
    };

    const adicionarMembro = () => {
        const form = new FormData();
        form.append("nome", novoMembro.nome);
        form.append("cargo", novoMembro.cargo);
        form.append("ordem", membros.length);
        form.append("foto", novoMembro.foto);

        if (subGrupoSelecionado) {
            form.append("subgrupoId", subGrupoSelecionado.id);
        } else {
            form.append("grupoId", grupoSelecionado.id);
        }

        fetch("http://localhost:8081/api/equipa/membro", {
            method: "POST",
            body: form
        }).then(() => {
            setModalAberto(false);
            setNovoMembro({ nome: "", cargo: "", foto: null });
            carregarEquipa();
        });
    };

    const removerMembro = (id) => {
        fetch(`http://localhost:8081/api/equipa/membro/${id}`, {
            method: "DELETE"
        }).then(carregarEquipa);
    };

    const moverMembro = (id, direcao) => {
        fetch(
            `http://localhost:8081/api/equipa/membro/${id}/mover?direcao=${direcao}`,
            { method: "PUT" }
        ).then(carregarEquipa);
    };

    return (
        <div className="assoc-main">
            <div className="assoc-lista">
                {grupos.map(grupo => (
                    <p
                        key={grupo.id}
                        className={`assoc-item ${
                            grupoSelecionado?.id === grupo.id ? "ativo" : ""
                        }`}
                        onClick={() => {
                            setGrupoSelecionado(grupo);
                            setSubGrupoSelecionado(null);
                        }}
                    >
                        <span className="assoc-content">
                            <ChevronRight size={16} />
                            {grupo.nome}
                        </span>
                    </p>
                ))}
            </div>

            <div className="assoc-divider" />

            <div className="assoc-conteudo">
                {grupoSelecionado?.tipo === "simples" && (
                    <div className="assoc-membros">
                        <h2>{grupoSelecionado.nome}</h2>

                        <div className="membros-lista">
                            {membros.map(m => (
                                <div className="membro-item" key={m.id}>
                                    <div className="membro-info">
                                        <p className="nome">{m.nome}</p>
                                        <p className="cargo">{m.cargo}</p>
                                    </div>

                                    <div className="membro-acoes">
                                        <ChevronUp
                                            className="icon-membro"
                                            onClick={() => moverMembro(m.id, "up")}
                                        />
                                        <ChevronDown
                                            className="icon-membro"
                                            onClick={() => moverMembro(m.id, "down")}
                                        />
                                        <Trash2
                                            className="icon-membro"
                                            onClick={() => removerMembro(m.id)}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div
                                className="adicionar-membro"
                                onClick={() => setModalAberto(true)}
                            >
                                <Plus size={16} /> Adicionar membro
                            </div>
                        </div>
                    </div>
                )}

                {grupoSelecionado?.tipo === "multiplo" && !subGrupoSelecionado && (
                    <div className="assoc-subgrupos">
                        <h2>{grupoSelecionado.nome}</h2>

                        {grupoSelecionado.subgrupos.map(sub => (
                            <div
                                key={sub.id}
                                className="subgrupo-item"
                                onClick={() => setSubGrupoSelecionado(sub)}
                            >
                                <div className="subgrupo-nome">{sub.nome}</div>

                                <div className="subgrupo-acoes">
                                    <ChevronUp
                                        className="icon-membro"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            moverSubgrupo(sub.id, "up");
                                        }}
                                    />
                                    <ChevronDown
                                        className="icon-membro"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            moverSubgrupo(sub.id, "down");
                                        }}
                                    />
                                    <Trash2
                                        className="icon-membro"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removerSubgrupo(sub.id);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}

                        <div
                            className="adicionar-membro"
                            onClick={() => setModalSubgrupoAberto(true)}
                        >
                            <Plus size={16} /> Criar
                        </div>
                    </div>
                )}

                {grupoSelecionado?.tipo === "multiplo" && subGrupoSelecionado && (
                    <div className="assoc-membros">
                        <h2>
                            <ChevronLeft
                                size={18}
                                style={{ cursor: "pointer", marginRight: "8px" }}
                                onClick={() => setSubGrupoSelecionado(null)}
                            />
                            {subGrupoSelecionado.nome}
                        </h2>

                        <div className="membros-lista">
                            {membros.map(m => (
                                <div className="membro-item" key={m.id}>
                                    <div className="membro-info">
                                        <p className="nome">{m.nome}</p>
                                        <p className="cargo">{m.cargo}</p>
                                    </div>

                                    <div className="membro-acoes">
                                        <ChevronUp
                                            className="icon-membro"
                                            onClick={() => moverMembro(m.id, "up")}
                                        />
                                        <ChevronDown
                                            className="icon-membro"
                                            onClick={() => moverMembro(m.id, "down")}
                                        />
                                        <Trash2
                                            className="icon-membro"
                                            onClick={() => removerMembro(m.id)}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div
                                className="adicionar-membro"
                                onClick={() => setModalAberto(true)}
                            >
                                <Plus size={16} /> Adicionar membro
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {modalSubgrupoAberto && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Criar</h3>
                            <X style={{cursor: "pointer"}} size={18} onClick={() => setModalSubgrupoAberto(false)} />
                        </div>

                        <input
                            type="text"
                            placeholder="Nome"
                            value={novoNomeSubgrupo}
                            onChange={e => setNovoNomeSubgrupo(e.target.value)}
                        />

                        <textarea
                            placeholder="Descrição"
                            value={novaDescricaoSubgrupo}
                            onChange={e => setNovaDescricaoSubgrupo(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Email / Contacto"
                            value={novoEmailSubgrupo}
                            onChange={e => setNovoEmailSubgrupo(e.target.value)}
                        />

                        <button onClick={criarSubgrupo}>Criar</button>
                    </div>
                </div>
            )}

            {modalAberto && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Adicionar Membro</h3>
                            <X style={{cursor: "pointer"}} size={18} onClick={() => setModalAberto(false)} />
                        </div>

                        <input
                            type="text"
                            placeholder="Nome"
                            value={novoMembro.nome}
                            onChange={e =>
                                setNovoMembro({ ...novoMembro, nome: e.target.value })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Cargo"
                            value={novoMembro.cargo}
                            onChange={e =>
                                setNovoMembro({ ...novoMembro, cargo: e.target.value })
                            }
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={e =>
                                setNovoMembro({ ...novoMembro, foto: e.target.files[0] })
                            }
                        />

                        <button onClick={adicionarMembro}>Adicionar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Assoc;
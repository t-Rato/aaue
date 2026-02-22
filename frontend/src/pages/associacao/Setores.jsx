import { useState, useEffect } from "react";

import "./Associacao.css";

import { ChevronRight } from "lucide-react";

function Setores() {

    const [setores, setSetores] = useState([]);
    const [selecSelecionado, setSelecSelecionado] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8081/api/equipa")
            .then(r => r.json())
            .then(data => {
                const grupoSetores = data.find(g => g.nome === "Setores");

                if (!grupoSetores) return;

                setSetores(grupoSetores.subgrupos || []);

                if (grupoSetores.subgrupos.length > 0) {
                    setSelecSelecionado(grupoSetores.subgrupos[0]);
                }
            });
    }, []);

    if (!selecSelecionado) return null;

    return(
        <div className="main">
            <h1 className="titulo">Setores</h1>

            <div className="separation">

                <div className="lista">
                    {setores.map(selec => (
                        <p
                            key={selec.id}
                            className={`selec-item ${selecSelecionado.id === selec.id ? "ativo" : ""}`}
                            onClick={() => setSelecSelecionado(selec)}
                        >
                            <span className="selec-content">
                                <ChevronRight size={16} className="selec-icon" />
                                <span className="selec-text">{selec.nome}</span>
                            </span>
                        </p>
                    ))}
                </div>

                <div className="divider"></div>

                <div className="selecionado" key={selecSelecionado.id}>
                    <h2 className="titulo">{selecSelecionado.nome}</h2>

                    <p className="sub">{selecSelecionado.descricao}</p>
            
                    <div className="equipa">
                        {selecSelecionado.membros.map(membro => (
                            <div className="card" key={membro.id}>
                                <img
                                    src={
                                        membro.fotoUrl
                                            ? `http://localhost:8081/${membro.fotoUrl}`
                                            : "/assets/associacao/pessoa.png"
                                    }
                                    alt={membro.nome}
                                />
                                <div className="desc setores">
                                    <p className="nome">{membro.nome}</p>
                                    <p className="cargo">{membro.cargo}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contacto">
                        <p><strong>Contacto:</strong> {selecSelecionado.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setores;
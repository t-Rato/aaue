import { useState } from "react";

import "./Associacao.css";

import { ChevronRight } from "lucide-react";

import person from "../../assets/associacao/pessoa.png";

function Setores() {

    const selec = [
        {
            nome: "Setor 1",
            descricao: "Descrição do Setor 1",
            email: "setor1@aaue.pt",
            membros: [
                { nome: "João Silva", cargo: "Coordenador" },
                { nome: "Ana Costa", cargo: "Membro" }
            ]
        },
        {
            nome: "Setor 2",
            descricao: "Descrição do Setor 2",
            email: "setor2@aaue.pt",
            membros: [
                { nome: "Carlos Mendes", cargo: "Coordenador" }
            ]
        },
        {
            nome: "Setor 3",
            descricao: "Descrição do Setor 3",
            email: "setor3@aaue.pt",
            membros: [
                { nome: "Rita Santos", cargo: "Membro" }
            ]
        }
    ];

    const [selecSelecionado, setSelecSelecionado] = useState(selec[0]);

    return(
        <div className="main">
            <h1 className="titulo">Setores</h1>

            <div className="separation">

                <div className="lista">
                    {selec.map((selec) => (
                        <p key={selec.nome} className={`selec-item ${selecSelecionado.nome === selec.nome ? "ativo" : ""}`} onClick={() => setSelecSelecionado(selec)}>
                            <span className="selec-content">
                                <ChevronRight size={16} className="selec-icon" />
                                <span className="selec-text">{selec.nome}</span>
                            </span>
                        </p>
                    ))}
                </div>

                <div className="divider"></div>

                <div className="selecionado" key={selecSelecionado.nome}>
                    <h2 className="titulo">{selecSelecionado.nome}</h2>

                    <p className="sub">{selecSelecionado.descricao}</p>
            
                    <div className="equipa">
                        {selecSelecionado.membros.map((membro, index) => (
                            <div className="card" key={index}>
                                <img src={person} alt="membro"/>
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
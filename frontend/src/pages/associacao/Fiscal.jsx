import "./Associacao.css";

import { useEffect, useState } from "react";

import person from "../../assets/associacao/pessoa.png";

function Fiscal() {

    const [membros, setMembros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/equipa")
            .then(r => r.json())
            .then(data => {
                const presidencia = data.find(g => g.nome === "Conselho Fiscal");
                if (presidencia) {
                    setMembros(presidencia.membros || []);
                }
            });
    }, []);

    return(
        <div className="main">
            <h1 className="titulo">Conselho Fiscal</h1>

            <p className="sub">O Conselho Fiscal é o órgão de fiscalização financeira da AAUE, responsável por analisar relatórios, contas e atividades financeiras para garantir transparência e integridade na gestão dos recursos da Associação. Emite pareceres técnicos, supervisiona a execução orçamental e assegura que todos os fundos são utilizados de forma responsável e eficiente, promovendo uma administração rigorosa e confiável ao serviço da comunidade académica.</p>
            
            <div className="equipa">
                {membros.map(m => (
                    <div className="card" key={m.id}>
                        <img src={m.fotoUrl ? `http://localhost:8081/${m.fotoUrl}` : person} alt={m.nome}/>

                        <div className="desc magna">
                            <p className="nome">{m.nome}</p>
                            <p className="cargo">{m.cargo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fiscal;
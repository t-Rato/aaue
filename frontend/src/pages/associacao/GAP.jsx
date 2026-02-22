import "./Associacao.css";

import { useEffect, useState } from "react";

import person from "../../assets/associacao/pessoa.png";

function GAP() {
    
    const [membros, setMembros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/equipa")
            .then(r => r.json())
            .then(data => {
                const presidencia = data.find(g => g.nome === "Gabinete de Apoio à Presidência");
                if (presidencia) {
                    setMembros(presidencia.membros || []);
                }
            });
    }, []);

    return(
        <div className="main">
            <h1 className="titulo">Gabinete de Apoio à Presidência</h1>

            <p className="sub">O Gabinete de Apoio à Presidência é a estrutura de assessoria direta e suporte técnico ao órgão executivo, garantindo a agilidade e eficiência das decisões presidenciais. Atua como o elo de ligação entre a Presidência e os demais órgãos, setores e parceiros externos, gerindo fluxos de informação e o apoio logístico necessário às atividades diárias. Responsável pela organização do expediente, preparação de reuniões e acompanhamento de processos estratégicos, este Gabinete assegura que a estrutura operacional da AAUE funcione de forma articulada, permitindo uma resposta rápida e fundamentada aos desafios da comunidade estudantil.</p>
            
            <div className="equipa">
                {membros.map(m => (
                    <div className="card" key={m.id}>
                        <img src={m.fotoUrl ? `http://localhost:8081/${m.fotoUrl}` : person} alt={m.nome}/>

                        <div className="desc gap">
                            <p className="nome">{m.nome}</p>
                            <p className="cargo">{m.cargo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GAP;
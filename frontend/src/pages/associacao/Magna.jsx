import "./Associacao.css";

import { useEffect, useState } from "react";

import person from "../../assets/associacao/pessoa.png";

function Magna() {

    const [membros, setMembros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/equipa")
            .then(r => r.json())
            .then(data => {
                const presidencia = data.find(g => g.nome === "Assembleia Magna");
                if (presidencia) {
                    setMembros(presidencia.membros || []);
                }
            });
    }, []);

    return (
        <div className="main">
            <h1 className="titulo">Mesa da Assembleia Magna</h1>

            <p className="sub">A Assembleia Magna é o órgão máximo deliberativo da AAUE, responsável por representar os estudantes de forma justa e garantir que a sua voz é ouvida em todas as decisões importantes. A Mesa da Assembleia Magna convoca e dirige as sessões, redige atas, organiza as eleições dos órgãos sociais e supervisiona todo o processo eleitoral da Associação, assegurando transparência, democracia interna e participação estudantil ativa.</p>
            
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

export default Magna;
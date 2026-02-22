import "./Associacao.css";

import { useEffect, useState } from "react";

import person from "../../assets/associacao/pessoa.png";

function Presidencia() {

    const [membros, setMembros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/equipa")
            .then(r => r.json())
            .then(data => {
                const presidencia = data.find(g => g.nome === "Presidência");
                if (presidencia) {
                    setMembros(presidencia.membros || []);
                }
            });
    }, []);

    return (
        <div className="main">
            <h1 className="titulo">Presidência</h1>

            <p className="sub">
                A Presidência é o órgão executivo da AAUE, responsável pela direção estratégica
                e gestão corrente da associação. Define as grandes linhas de atuação, representa
                a AAUE perante entidades externas e coordena todas as atividades e eventos.
                Trabalha em articulação com os restantes órgãos e estruturas da Associação,
                assegurando uma ação coesa e eficaz. É o coração operacional da organização
                estudantil, promovendo iniciativas que defendem os interesses dos estudantes
                e dinamizam a vida académica da Universidade de Évora.
            </p>

            <div className="equipa">
                {membros.map(m => (
                    <div className="card" key={m.id}>
                        <img src={m.fotoUrl ? `http://localhost:8081/${m.fotoUrl}` : person} alt={m.nome}/>

                        <div className="desc presi">
                            <p className="nome">{m.nome}</p>
                            <p className="cargo">{m.cargo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Presidencia;
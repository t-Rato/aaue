import "./Associacao.css";

import person from "../../assets/associacao/pessoa.png";

function Presidencia() {
    return (
        <div className="main">
            <h1 className="titulo">Presidência</h1>

            <p className="sub">A Presidência é o órgão executivo da AAUE, responsável pela direção estratégica e gestão corrente da associação. Define as grandes linhas de atuação, representa a AAUE perante entidades externas e coordena todas as atividades e eventos. Trabalha em articulação com os restantes órgãos e estruturas da Associação, assegurando uma ação coesa e eficaz. É o coração operacional da organização estudantil, promovendo iniciativas que defendem os interesses dos estudantes e dinamizam a vida académica da Universidade de Évora.</p>
            
            <div className="equipa">
                <div className="card">
                    <img src={person}/>
                    <div className="desc presi">
                        <p className="nome">Nome</p>
                        <p className="cargo">Cargo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presidencia;
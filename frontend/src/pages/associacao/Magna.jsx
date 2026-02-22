import "./Associacao.css";

import person from "../../assets/associacao/pessoa.png";

function Magna() {
    return (
        <div className="main">
            <h1 className="titulo">Mesa da Assembleia Magna</h1>

            <p className="sub">A Assembleia Magna é o órgão máximo deliberativo da AAUE, responsável por representar os estudantes de forma justa e garantir que a sua voz é ouvida em todas as decisões importantes. A Mesa da Assembleia Magna convoca e dirige as sessões, redige atas, organiza as eleições dos órgãos sociais e supervisiona todo o processo eleitoral da Associação, assegurando transparência, democracia interna e participação estudantil ativa.</p>
            
            <div className="equipa">
                <div className="card">
                    <img src={person}/>
                    <div className="desc magna">
                        <p className="nome">Nome</p>
                        <p className="cargo">Cargo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Magna;
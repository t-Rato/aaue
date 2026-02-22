import "./Associacao.css";

import person from "../../assets/associacao/pessoa.png";

function GAP() {
    return(
        <div className="main">
            <h1 className="titulo">Gabinete de Apoio à Presidência</h1>

            <p className="sub">O Gabinete de Apoio à Presidência é a estrutura de assessoria direta e suporte técnico ao órgão executivo, garantindo a agilidade e eficiência das decisões presidenciais. Atua como o elo de ligação entre a Presidência e os demais órgãos, setores e parceiros externos, gerindo fluxos de informação e o apoio logístico necessário às atividades diárias. Responsável pela organização do expediente, preparação de reuniões e acompanhamento de processos estratégicos, este Gabinete assegura que a estrutura operacional da AAUE funcione de forma articulada, permitindo uma resposta rápida e fundamentada aos desafios da comunidade estudantil.</p>
            
            <div className="equipa">
                <div className="card">
                    <img src={person}/>
                    <div className="desc gap">
                        <p className="nome">Nome</p>
                        <p className="cargo">Cargo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GAP;
import "./Associacao.css";

import person from "../../assets/associacao/pessoa.png";

function Fiscal() {
    return(
        <div className="main">
            <h1 className="titulo">Conselho Fiscal</h1>

            <p className="sub">O Conselho Fiscal é o órgão de fiscalização financeira da AAUE, responsável por analisar relatórios, contas e atividades financeiras para garantir transparência e integridade na gestão dos recursos da Associação. Emite pareceres técnicos, supervisiona a execução orçamental e assegura que todos os fundos são utilizados de forma responsável e eficiente, promovendo uma administração rigorosa e confiável ao serviço da comunidade académica.</p>
            
            <div className="equipa">
                <div className="card">
                    <img src={person}/>
                    <div className="desc fiscal">
                        <p className="nome">Nome</p>
                        <p className="cargo">Cargo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fiscal;
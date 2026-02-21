import "./Menu.css";

import bg from "../assets/menu/evora.jpg";
import logo from "../assets/Logo.png";

import { useState } from "react";

import { Globe, Scale, WalletMinimal, Network, CreditCard, ArrowRight } from 'lucide-react';

function Menu() {
    const[active, setActive] = useState("presidencia");

    const buttonColors = {
        presidencia: "#eccd1b",
        assembleia: "#b3b3b3",
        fiscal: "#93ff8f",
        setores: "#ff8c49",
        seccoes: "#2eaed4"
    };

    return (
        <div className="menu">
            <div className="inicio" style={{ backgroundImage: `url(${bg})`}}>
                <div className="titdiv">
                    <h1>DE ESTUDANTES,</h1>
                    <h1 style={{ borderBottomStyle: "solid", borderBottomWidth: "2px" }}>PARA ESTUDANTES</h1>
                </div>
                <p>A Associação Académica da Universidade de Évora é responsável por potenciar o teu envolvimento e desenvolvimento académicos. Podes contar com a AAUE para o teu desenvolvimento pessoal e profissional, contando com eventos culturais, desportivos, lúdicos, cívicos, sociais, pedagógicos e muitos outros.</p>
            </div>

            <div className="whatwedo">
                <h1>O QUE FAZEMOS?</h1>
                <p>A AAUE está organizada em vários Órgãos, Secções e Setores, cada um com a sua área de intervenção e competências bem definidas.</p>
                <p>Fica a conhecer o nosso trabalho aqui!</p>

                <div className="organizacao">
                    <div className="org-tabs-wrapper">
                        <div className="org-tabs">
                            <button 
                                className={active === "presidencia" ? "active" : ""}
                                onClick={() => setActive("presidencia")}
                            >
                                Presidência
                            </button>
                            
                            <button 
                                className={active === "assembleia" ? "active" : ""}
                                onClick={() => setActive("assembleia")}
                            >
                                Assembleia Magna
                            </button>

                            <button 
                                className={active === "fiscal" ? "active" : ""}
                                onClick={() => setActive("fiscal")}
                            >
                                Conselho Fiscal
                            </button>

                            <button 
                                className={active === "setores" ? "active" : ""}
                                onClick={() => setActive("setores")}
                            >
                                Setores
                            </button>

                            <button 
                                className={active === "seccoes" ? "active" : ""}
                                onClick={() => setActive("seccoes")}
                            >
                                Secções Autónomas
                            </button>
                        </div>
                    </div>

                    <div className="org-content-box">
                        {active === "presidencia" && (
                            <>
                                <h2>Presidência</h2>
                                <Globe className="icon" style={{ color: buttonColors[active] }}/>
                                <p>A Presidência é o órgão executivo da AAUE, responsável pela direção estratégica e gestão corrente da associação. Define as grandes linhas de atuação, representa a AAUE perante entidades externas e coordena todas as atividades e eventos. Trabalha em articulação com os restantes órgãos e estruturas da Associação, assegurando uma ação coesa e eficaz. É o coração operacional da organização estudantil, promovendo iniciativas que defendem os interesses dos estudantes e dinamizam a vida académica da Universidade de Évora.</p>
                            </>
                        )}

                        {active === "assembleia" && (
                            <>
                                <h2>Assembleia Magna</h2>
                                <Scale className="icon" style={{ color: buttonColors[active] }}/>
                                <p>A Assembleia Magna é o órgão máximo deliberativo da AAUE, responsável por representar os estudantes de forma justa e garantir que a sua voz é ouvida em todas as decisões importantes. A Mesa da Assembleia Magna convoca e dirige as sessões, redige atas, organiza as eleições dos órgãos sociais e supervisiona todo o processo eleitoral da Associação, assegurando transparência, democracia interna e participação estudantil ativa.</p>
                            </>
                        )}

                        {active === "fiscal" && (
                            <>
                                <h2>Conselho Fiscal</h2>
                                <WalletMinimal className="icon" style={{ color: buttonColors[active] }}/>
                                <p>O Conselho Fiscal é o órgão de fiscalização financeira da AAUE, responsável por analisar relatórios, contas e atividades financeiras para garantir transparência e integridade na gestão dos recursos da Associação. Emite pareceres técnicos, supervisiona a execução orçamental e assegura que todos os fundos são utilizados de forma responsável e eficiente, promovendo uma administração rigorosa e confiável ao serviço da comunidade académica.</p>
                            </>
                        )}

                        {active === "setores" && (
                            <>
                                <h2>Setores</h2>
                                <Network className="icon" style={{ color: buttonColors[active] }}/>
                                <p>Os Setores da AAUE são estruturas operacionais especializadas que executam as atividades concretas da associação, abrangendo áreas essenciais da vida académica. São responsáveis por planificar e dinamizar projetos práticos em múltiplos domínios da vida estudantil, promovendo o desenvolvimento integral dos estudantes através de ações concretas e próximas das suas necessidades quotidianas.</p>
                            </>
                        )}

                        {active === "seccoes" && (
                            <>
                                <h2>Secções Autónomas</h2>
                                <CreditCard className="icon" style={{ color: buttonColors[active] }}/>
                                <p>As Secções Autónomas da AAUE são estruturas com elevado grau de independência organizativa, dedicadas a áreas específicas da vida académica. Desenvolvem projetos próprios, dinamizam atividades autónomas e aproximam a Associação das diferentes comunidades estudantis, mantendo sempre uma ligação estratégica aos órgãos centrais da organização e contribuindo para uma representação mais diversificada e próxima dos estudantes.</p>
                            </>
                        )}
                    </div>
                </div>

                <button className="botao" style={{ backgroundColor: buttonColors[active] }}>
                    Ver equipa
                </button>
            </div>

            <div className="whoarewe">
                <div className="text">
                    <h1>O QUE É A AAUE?</h1>

                    <p>A Associação Académica da Universidade de Évora é uma organização sem fins lucrativos, não governamentale de carácter estudantil, pautando-se pelos princípios gerais básicos do movimento associativo: Democraticidade, Unicidade, Apartidarismo e Arreligiosidade.</p>

                    <p>Atualmente, a Associação Académica da Universidade de Évora encontra-se organizada em diversos grupos, passando a sua operacionalização pela Direção e Secções Autónomas, sendo que a Direção é constituído por Setores/Secções, diversificados e focados em áreas específicas de operacionalização e ação.</p>

                    <button className="botao" style={{ backgroundColor:"#000000", color:"#ffffff" }}>
                        Descobre mais
                        <ArrowRight size={18}/>
                    </button>
                </div>

                <div className="image">
                    <img src={logo}/>
                </div>
            </div>
        </div>
    );
}

export default Menu;
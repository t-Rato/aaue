import "./Sobre.css";

import bg from "../../assets/associacao/equipa.jpg";
import logo from "../../assets/Logo.png";

function Sobre() {
    return (
        <div className="all">
            <div className="top" style={{ backgroundImage: `url(${bg})`}}>
                <div className="title">
                    <h1>SOBRE NÓS</h1>
                </div>
            </div>

            <div className="desc-sobre">
                <div className="text">
                    <p>
                        A Associação Académica da Universidade de Évora é uma organização sem fins lucrativos, não governamental e de carácter estudantil, pautando-se pelos princípios gerais básicos do movimento associativo: Democraticidade, Unicidade, Apartidarismo e Arreligiosidade.
                        A 29 de Maio de 1978 é fundada com o nome de Associação de Estudantes do Instituto Universitário de Évora a organização representativa dos estudantes da Academia Eborense. Após a passagem de Instituto Universitário de Évora para Universidade de Évora em 1980 a associação assume a denominação de Associação de Estudantes da Universidade de Évora mantendo-se esta até 2010, altura em que passa a denominar- se Associação Académica da Universidade de Évora (AAUE).
                    </p>
                    
                    <p>
                        A AAUE representa desde 1978 os estudantes desta academia interna e externamente. Ao nível da Universidade de Évora, a AAUE tem assento no Senado, no Conselho de Ação Social, no Conselho de Avaliação, no Conselho Consultivo do Fundo de Ação Social. Consta também em estatutos e regulamentos como a entidade responsável apresentação de listas constituídas por estudantes a determinados órgãos e ainda pela nomeação de estudantes para outros.
                    </p>
                        
                    <p>
                        A nível externo a AAUE desempenha um papel político junto das outras associações congéneres, no Ministério da Ciência, Tecnologia e Ensino Superior e está representada em órgãos estatais e regionais. Faz ainda parte do Fórum Académico para a Informação e Representação Externa (FAIRe) e da Federação Académica do Desporto Universitário (FADU), da qual é membro fundador. A AAUE faz ainda parte do Conselho Municipal de Juventude, do Conselho Consultivo Regional do IPDJ e do Conselho Municipal de Educação. Para além do trabalho político, a AAUE dedica-se à promoção de atividades culturais e desportivas e presta aos estudantes da Universidade de Évora serviços variados, onde se inserem o lazer e a informação, assim como a formação extracurricular.
                    </p>

                    <p>
                        Atualmente, a Associação Académica da Universidade de Évora encontra-se organizada em diversos grupos, passando a sua operacionalização pela Direção e Secções Autónomas, sendo que a Direção é constituído por Setores/Secções, diversificados e focados em áreas específicas de operacionalização e ação.
                    </p>
                </div>

                <div className="divider-v"></div>

                <div className="img-logo">
                    <img src={logo} />
                </div>
            </div>

            
        </div>
    );
}

export default Sobre;
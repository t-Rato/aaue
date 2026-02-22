import "./Topbar.css"

import Logo from "../assets/Logo.png";

import { useNavigate } from "react-router-dom";

function Topbar() {

    const navigate = useNavigate();

    return (
        <div className="topbar">
            <div className="AAUE" onClick={() => navigate("/")}>
                <img src={Logo} alt="Logo" className="logo"/>
                <h1>AAUE</h1>
            </div>

            <div className="pages">
                <div className="item" onClick={() => navigate("/noticias")}>
                    <p>Notícias</p>                    
                </div>

                <div className="item">
                    <p>Associação</p>

                    <div className="dp">
                        <p onClick={() => navigate("/associacao/presidencia")}>Presidência</p>
                        <p onClick={() => navigate("/associacao/gap")}>Gabinete de Apoio à Presidência</p>
                        <p onClick={() => navigate("/associacao/setores")}>Setores</p>
                        <p onClick={() => navigate("/associacao/seccoes")}>Secções Autónomas</p>
                        <p onClick={() => navigate("/associacao/magna")}>Assembleia Magna</p>
                        <p onClick={() => navigate("/associacao/fiscal")}>Conselho Fiscal</p>
                        <p onClick={() => navigate("/associacao/sobre")}>Sobre Nós</p>
                        <p onClick={() => navigate("/associacao/estatutos")}>Estatutos</p>
                        <p onClick={() => navigate("/associacao/guias")}>Guia do Estudante</p>
                    </div>
                </div>

                <div className="item">
                    <p>Plataformas</p>

                    <div className="dp">
                        <p>Portal do Alojamento</p>
                        <p>Desporto</p>
                    </div>
                </div>

                <div className="item">
                    <p>Outros</p>

                    <div className="dp">
                        <p>Serviços</p>
                        <p>Denúncias</p>
                        <p>Contactos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
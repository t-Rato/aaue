import "./Footer.css";

import logo from "../assets/Logo.png";

import { MapPin, Mail, Phone } from "lucide-react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-1">
                <div className="logo">
                    <img src={logo}></img>
                </div>

                <div className="v-divider"></div>

                <div className="contact-us">
                    <h2>Contacta-nos!</h2>
                    
                    <div className="info">
                        <div className="information">
                            <MapPin/>
                            <p>Rua Diogo Cão nº21, 7000-872 Évora</p>
                        </div>

                        <div className="information">
                            <Mail/>
                            <p>geral@aaue.pt</p>
                        </div>

                        <div className="information">
                            <Phone/>
                            +351 266 098 003
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-divider"></div>

            <div className="social">
                <a className="media fb" href="https://www.facebook.com/AAUEvora" target="_blank" rel="noreferrer">
                    <svg role="img" viewBox="0 0 24 24" fill="#a7a7a7" width="24" height="24">
                        <path 
                            transform="scale(1.2) translate(-2, -3)" 
                            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-3.134c0-2.508 1.225-3.874 3.94-3.874 1.465 0 2.261.101 2.629.153v3.074h-1.306c-1.459 0-1.826.695-1.826 1.717v2.064h3.913l-.528 3.667h-3.385v7.981H9.101z"
                        />
                    </svg>
                </a>

                <a className="media inst" href="https://www.instagram.com/aauevora/" target="_blank" rel="noreferrer">
                    <svg role="img" viewBox="0 0 24 24" fill="#a7a7a7" width="24" height="24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.333-.072-4.613c-.06-1.277-.262-2.147-.558-2.913-.306-.788-.718-1.459-1.384-2.126C21.058.935 20.39.53 19.599.227 18.834.131 17.965.072 16.687.072 15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07s-3.585-.015-4.85-.074c-1.17-.061-1.805-.256-2.227-.421-.562-.224-.96-.479-1.382-.899-.419-.419-.679-.824-.896-1.38-.164-.42-.36-1.065-.413-2.235-.057-1.274-.07-1.649-.07-4.859s.015-3.585.074-4.85c.061-1.17.256-1.805.421-2.227.224-.562.479-.96.899-1.382.419-.419.824-.679 1.38-.896.42-.164 1.065-.36 2.235-.413 1.274-.057 1.649-.07 4.859-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                </a>

                <a className="media x" href="https://x.com/AAUEvora" target="_blank" rel="noreferrer">
                    <svg role="img" viewBox="0 0 24 24" fill="#a7a7a7" width="22" height="22">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                </a>

                <a className="media in" href="https://pt.linkedin.com/company/aauevora" target="_blank" rel="noreferrer">
                    <svg role="img" viewBox="0 0 24 24"fill="#a7a7a7">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </div>

            <p className="rights">© AAUE 2026 | TODOS OS DIREITOS RESERVADOS</p>
        </div>
    );
}

export default Footer;
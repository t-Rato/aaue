import "./Download.css";

import { ArrowBigDownDash, Gavel, UsersRound, Trophy, Vote } from 'lucide-react';

import pdf1 from "../../assets/estatutos/est_e_reg.pdf";
import pdf2 from "../../assets/estatutos/est_sec_com.pdf";
import pdf3 from "../../assets/estatutos/est_sec_desp.pdf";
import pdf4 from "../../assets/estatutos/reg_ele.pdf";

function Estatuto() {
    const handleDownload = (fileImport, filename) => {
        const fileUrl = `../../assets/estatutos/${filename}`;

        const link = document.createElement("a");
        link.href = fileImport;
        link.setAttribute("download", filename);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="download-buttons">
            <div className="btn-container estatutos">
               <button className="btn-download" onClick={() => handleDownload(pdf1, "est_e_reg.pdf")}>
                    <Gavel size={40}/>
                    
                    Estatutos e Regulamentos
                    
                    <div className="down">
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                        <p>Download</p>
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                    </div>
                </button>

                <button className="btn-download" onClick={() => handleDownload(pdf2, "est_sec_com.pdf")}>
                    <UsersRound size={40}/>
                    
                    Estatutos da Secção de Comunidade
                    
                    <div className="down">
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                        <p>Download</p>
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                    </div>
                </button>

                <button className="btn-download" onClick={() => handleDownload(pdf3, "est_sed_desp.pdf")}>
                    <Trophy size={40}/>
                    
                    Estatutos da Secção Desportiva
                    
                    <div className="down">
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                        <p>Download</p>
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                    </div>
                </button>

                <button className="btn-download" onClick={() => handleDownload(pdf4, "reg_ele.pdf")}>
                    <Vote size={40}/>
                    
                    Regulamento Eleitoral
                    
                    <div className="down">
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                        <p>Download</p>
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Estatuto;
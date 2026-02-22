import "./Download.css";

import { ArrowBigDownDash, Compass, GraduationCap } from 'lucide-react';

import pdf1 from "../../assets/guias/guia_est.pdf";
import pdf2 from "../../assets/guias/guia_bols.pdf";

function Guias() {
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
            <div className="btn-container guias">
               <button className="btn-download" onClick={() => handleDownload(pdf1, "guia_est.pdf")}>
                    <Compass size={40}/>
                    
                    Guia do Estudante
                    
                    <div className="down">
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                        <p>Download</p>
                        <ArrowBigDownDash size={34} style={{strokeWidth: "1.5px"}}/>
                    </div>
                </button>

                <button className="btn-download" onClick={() => handleDownload(pdf2, "guia_bols.pdf")}>
                    <GraduationCap size={40}/>
                    
                    Guia de bolsas e apoios de estudo
                    
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

export default Guias;
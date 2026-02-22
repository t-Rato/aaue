import './News.css';

import { Plus, X } from "lucide-react";

import { useRef, useState, useEffect } from "react";

function News() {
    const titleRef = useRef(null);
    const briefRef = useRef(null);
    const fullRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('Nenhuma imagem selecionada');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/noticias")
            .then(res => res.json())
            .then(data => setNoticias(data));
    }, []);

    const handleInput = (ref) => {
        const ta = ref.current;

        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setSelectedFile(file);
        setFileName(file.name);
        }
    };

    const handleSubmit = async () => {
        const titulo = titleRef.current.value.trim();
        const breve = briefRef.current.value.trim();
        const descricao = fullRef.current.value.trim();

        if (!titulo || !breve || !descricao || !selectedFile) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("breveDesc", breve);
        formData.append("descricao", descricao);
        formData.append("data", new Date().toISOString().split("T")[0]);
        formData.append("imagem", selectedFile);

        const response = await fetch("http://localhost:8081/api/noticias/upload", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            alert("Erro ao criar notícia!");
            return;
        }

        alert("Notícia criada!");

        const res = await fetch("http://localhost:8081/api/noticias");
        const data = await res.json();
        setNoticias(data);

        titleRef.current.value = "";
        briefRef.current.value = "";
        fullRef.current.value = "";
        setSelectedFile(null);
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8081/api/noticias/${id}`, {
            method: "DELETE"
        });

        setNoticias(noticias.filter(n => n.id !== id));
    };

    return (
        <div className="main-news">
            <div className="create">
                <h3 className="title-news">Criar Notícia <Plus color="#437fb0"/> </h3>

                <div className="forms">
                    <div className="lbl">
                        <p><span>Título</span></p>
                        <textarea ref={titleRef}    placeholder="Insira um título" required="Título obrigatório." onInput={() => handleInput(titleRef)}/>
                    </div>

                    <div className="lbl">
                        <p><span>Breve Descrição</span></p>
                        <textarea ref={briefRef} placeholder="Insira uma breve descrição" required="Breve descrição obrigatória." onInput={() => handleInput(briefRef)}/>
                    </div>

                    <div className="lbl">
                        <p><span>Descrição Completa</span></p>
                        <textarea ref={fullRef} placeholder="Insira uma descrição completa" required="Descrição completa obrigatória." onInput={() => handleInput(fullRef)}/>
                    </div>

                    <div className="lbl">
                        <p><span>Imagem</span></p>
                        <label className="custom-file">
                            {selectedFile ? selectedFile.name : 'Escolher imagem'}
                            <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange}
                            className="file-input"
                            />
                        </label>
                    </div>

                    <div className="submit-button">
                        <button onClick={handleSubmit}>Clique para criar a notícia</button>
                    </div>
                </div>
            </div>

            <div className="v-divider"></div>

            <div className="delete-news">
                <h3 className="title-news">Apagar Notícia <X color="#d6491e"/> </h3>

                {noticias.map(noticia => (
                    <div key={noticia.id} className="delete-item">
                        <span>{noticia.titulo}</span>
                        <button onClick={() => handleDelete(noticia.id)}>
                            Apagar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
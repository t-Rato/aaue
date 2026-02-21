import "./Noticias.css";

import { useState, useEffect, useCallback, useRef } from "react";

import { Frown } from "lucide-react";

function Noticias() {
    const [noticias, setNoticias] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [bgIndex, setBgIndex] = useState(0);

    const observer = useRef();

    const loadNoticias = useCallback(async (pageNum) => {
        if (loading) return;
        
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8081/api/noticias?page=${pageNum}&size=5`);
            const newNoticias = await res.json();
            
            setNoticias(prev => {
                const idsExistentes = new Set(prev.map(n => n.id));
                const noticiasUnicas = newNoticias.filter(n => !idsExistentes.has(n.id));
                return [...prev, ...noticiasUnicas];
            });
            
            if (newNoticias.length < 5) {
                setHasMore(false);
            }
        } catch (err) {
            console.error("Erro ao buscar notícias:", err);
        } finally {
            setLoading(false);
        }
    }, [loading]);

    useEffect(() => {
        loadNoticias(1);
    }, []);

    const lastNewsElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !loading) {
                const nextPage = page + 1;
                setPage(nextPage);
                loadNoticias(nextPage);
            }
        });
        
        if (node) observer.current.observe(node);
    }, [hasMore, loading, page, loadNoticias]);

    useEffect(() => {
        if (noticias.length === 0) return;
        
        const interval = setInterval(() => {
            const maxIndex = Math.min(4, noticias.length - 1);
            setBgIndex(prev => (prev + 1) % (maxIndex + 1));
        }, 10000);
        
        return () => clearInterval(interval);
    }, [noticias]);

    return (
        <div className="global">
            {noticias.length === 0 ? (
                <div className="no-news">
                    <h1>Oops...</h1>
                    <h2>Não há notícias.</h2>
                    <Frown size={80} style={{paddingBottom:"20px"}}/>
                </div>
            ) : (
                <>
                    <div className="news">
                        {noticias.slice(0, 5).map((noticia, index) => (
                            <div key={noticia.id} className={`news-layer ${index === bgIndex ? "active" : ""}`} style={{ backgroundImage: `url(http://localhost:8081/${noticia.imagemUrl})` }}>
                                <div className="newsText">
                                    <h1>{noticia.titulo}</h1>
                                    <p>{noticia.breveDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {noticias.map((noticia, index) => (
                        <div  key={noticia.id}  className="ind-new" ref={index === noticias.length - 1 && hasMore ? lastNewsElementRef : null}>
                            <div className="new-img">
                                <img src={`http://localhost:8081/${noticia.imagemUrl}`} alt={noticia.titulo} loading="lazy"/>
                            </div>
                            <div className="new-text">
                                <h1>{noticia.titulo}</h1>
                                <p>{noticia.descricao}</p>
                                <small>{noticia.data}</small>
                            </div>
                        </div>
                    ))}
                    
                    {loading && <div className="loading">Loading...</div>}
                </>
            )}
        </div>
    );
}

export default Noticias;

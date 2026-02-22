import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import News from "./admin/News.jsx";

import Menu from "./pages/Menu.jsx";
import Noticias from "./pages/Noticias.jsx";

import Presidencia from './pages/associacao/Presidencia.jsx';
import GAP from './pages/associacao/GAP.jsx';
import Setores from './pages/associacao/Setores.jsx';
import Seccoes from './pages/associacao/Seccoes.jsx';
import Magna from './pages/associacao/Magna.jsx';
import Fiscal from './pages/associacao/Fiscal.jsx';
import Sobre from './pages/associacao/Sobre.jsx';
import Estatutos from './pages/associacao/Estatutos.jsx';
import Guias from './pages/associacao/Guias.jsx';

import Topbar from './components/Topbar.jsx';
import Footer from "./components/Footer.jsx";

createRoot(
    document.getElementById('root')
).render(
    <StrictMode>
        <BrowserRouter>
            <Topbar />

            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/noticias" element={<Noticias />} />

                <Route path="/associacao/presidencia" element={<Presidencia />} />
                <Route path="/associacao/gap" element={<GAP />} />
                <Route path="/associacao/setores" element={<Setores />} />
                <Route path="/associacao/seccoes" element={<Seccoes />} />
                <Route path="/associacao/magna" element={<Magna />} />
                <Route path="/associacao/fiscal" element={<Fiscal />} />
                <Route path="/associacao/sobre" element={<Sobre />} />
                <Route path="/associacao/estatutos" element={<Estatutos />} />
                <Route path="/associacao/guias" element={<Guias />} />

                <Route path="/admin/news" element={<News />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    </StrictMode>
);

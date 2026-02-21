import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import News from "./admin/News.jsx";

import Menu from "./pages/Menu.jsx";
import Noticias from "./pages/Noticias.jsx";

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

                <Route path="/admin/news" element={<News />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    </StrictMode>
);

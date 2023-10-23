import {  Link, Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Sobre from "../page/sobre";
import GameDemon from "../layout/logic/GameDemon";

export default function AppRoutes() {
  return (
    
      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/gamedemons" element={<GameDemon />} />

        <Route
          path="*"
          element={
            <p>
              Erro de Página <Link to="/">Voltar</Link>
            </p>
          }
        />
      </Routes>
  
  );
}

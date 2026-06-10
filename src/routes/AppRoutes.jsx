import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import JugadoresPage from "../pages/JugadoresPage";
import TrabajadoresPage from "../pages/TrabajadoresPage";
import FinancieraPage from "../pages/FinancieraPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route
            path="jugadores"
            element={<JugadoresPage />}
          />

          <Route
            path="trabajadores"
            element={<TrabajadoresPage />}
          />

          <Route
            path="financiera"
            element={<FinancieraPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
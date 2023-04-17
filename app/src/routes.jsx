import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu.tsx";
import DefaultPage from "./components/defaultPage/DefaultPage.tsx";
import Home from "./pages/home/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import About from "./pages/about/About.tsx";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

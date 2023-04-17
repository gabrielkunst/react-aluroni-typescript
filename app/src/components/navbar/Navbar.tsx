import Logo from "../../assets/Logo.svg";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const routes = [
    { label: "Home", path: "/" },
    { label: "Cardápio", path: "cardapio" },
    { label: "Sobre", path: "sobre" },
  ];
  return (
    <nav className={style.nav}>
      <img src={Logo} alt="Logo da Aluroni" />
      <ul>
        {routes.map((route, index) => (
          <li key={route.label}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

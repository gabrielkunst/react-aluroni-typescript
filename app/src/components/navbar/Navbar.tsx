import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "../../assets/Logo.svg";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
	const routes = [
		{ label: "Home", path: "/" },
		{ label: "Cardápio", path: "cardapio" },
		{ label: "Sobre", path: "sobre" },
	];
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<nav className={style.nav}>
			<div className={style.nav__logoContainer}>
				<img className={style.nav__image} src={Logo} alt="Logo da Aluroni" />
				<button
					className={style.nav__hamburger}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <AiFillCloseCircle /> : <FaBars />}
				</button>
			</div>
			<ul
				className={classNames({
					[style.nav__links]: true,
					[style.nav__links__active]: isOpen,
				})}
			>
				{routes.map((route) => (
					<li key={route.label} onClick={() => setIsOpen(!isOpen)}>
						<Link to={route.path}>{route.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

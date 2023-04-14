import style from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";

export default function Header() {
	return (
		<div className={style.wrapper}>
			<nav className={style.wrapper__nav}>
				<img src={Logo} alt="Logo da Aluroni" />
				<ul>
					<li>
						<a href="#">Início</a>
					</li>
					<li>
						<a href="#">Cardápio</a>
					</li>
					<li>
						<a href="#">Sobre</a>
					</li>
				</ul>
			</nav>
			<header className={style.wrapper__header}>
				<div>A casa do código e da massa</div>
			</header>
		</div>
	);
}

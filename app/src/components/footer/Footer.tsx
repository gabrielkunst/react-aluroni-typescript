import style from "./Footer.module.scss";
import Logo from "../../assets/Logo.svg";

export default function Footer() {
	return (
		<footer className={style.footer}>
			<img src={Logo} alt="Logo da Aluroni" />
		</footer>
	);
}

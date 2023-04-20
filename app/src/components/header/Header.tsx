import style from "./Header.module.scss";

export default function Header() {
	return (
		<header className={style.header}>
			<div className={style.header__content}>A casa do código e da massa</div>
		</header>
	);
}

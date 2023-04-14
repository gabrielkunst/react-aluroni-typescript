import Menu from "./pages/menu/Menu";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import style from "./App.module.scss";

export default function App() {
	return (
		<main className={style.App}>
			<Header />
			<Menu />
			<Footer />
		</main>
	);
}

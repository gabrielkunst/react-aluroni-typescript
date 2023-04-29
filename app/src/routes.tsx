import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import DefaultPage from "./components/defaultPage/DefaultPage";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import NotFound from "./pages/notfound/NotFound";
import "./index.scss";
import Item from "./pages/item/Item";

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
					<Route path="cardapio/pratos/:id" element={<Item />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</main>
	);
}

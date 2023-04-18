import Image from "../../assets/notFound/not_found.svg";
import style from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<section className={style.notFound}>
			<button onClick={() => navigate(-1)}>Voltar</button>
			<div className={style.image}>
				<img src={Image} alt="Not Found" />
			</div>
		</section>
	);
}

import style from "./About.module.scss";
import tema from "../../styles/tema.module.scss";

export default function About() {
	return (
		<section className={style.about}>
			<h3 className={tema.title}>Sobre</h3>
			<div className={style.about__images}>
				<div id="image1">
					<p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
					</p>
				</div>
				<div id="image2">
					<p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
					</p>
				</div>
				<div id="image3">
					<p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
					</p>
				</div>
			</div>
		</section>
	);
}

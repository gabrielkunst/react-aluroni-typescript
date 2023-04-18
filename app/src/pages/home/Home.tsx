import style from "./Home.module.scss";
import ProductList from "../../data/ProductsList.json";
import NossaCasa from "../../assets/nossa_casa.png";
import tema from "../../styles/tema.module.scss";
import classNames from "classnames";

export default function Home() {
  let products = [...ProductList];
  products = products.sort(() => 0.5 - Math.random()).slice(0, 3);
  return (
    <section className={style.home}>
      <h3 className={tema.title}>Recomendações da cozinha</h3>
      <div className={style.products}>
        {products.map((item) => (
          <article key={item.id} className={style.item}>
            <div className={style.item__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <div className={style.item__link}>
              <a href="#">Ver mais</a>
            </div>
          </article>
        ))}
      </div>
      <div className={style.info}>
        <h3 className={tema.title}>Nossa casa</h3>
        <div className={style.info__image}>
          Rua Vergueiro, 3185 || Vila Marlana - SP
        </div>
      </div>
    </section>
  );
}

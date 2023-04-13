import style from "./Products.module.scss";
import productsList from "../../../data/ItemsList.json";

export default function Products() {
  return (
    <>
      {productsList.map((item) => (
        <article className={style.card} key={item.id}>
          <div className={style.card__image}>
            <img src={item.photo} alt={item.title} />
          </div>
          <div className={style.card__content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={style.card__labels}>
              <div>{item.category.label}</div>
              <div>{item.size}g</div>
              <div>
                Serve {item.serving} pessoa{item.serving > 1 ? "s" : ""}
              </div>
              <div>R${item.price.toFixed(2)}</div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

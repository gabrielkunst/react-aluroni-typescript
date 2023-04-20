import { useNavigate, useParams } from "react-router-dom";
import style from "./Item.module.scss";

import productsList from "@/data/ProductsList.json";
import NotFound from "../notfound/NotFound";
import DefaultPage from "@/components/defaultPage/DefaultPage";

export default function Products() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentProduct = productsList.find((item) => item.id === Number(id));
  if (!currentProduct) {
    return <NotFound />;
  }
  return (
    <DefaultPage>
      <section className={style.itemContainer}>
        <button className={style.button} onClick={() => navigate(-1)}>
          {"< Voltar"}
        </button>
        <div className={style.item}>
          <h1 className={style.item__title}>{currentProduct?.title}</h1>
          <div className={style.item__image}>
            <img src={currentProduct?.photo} alt={currentProduct?.title} />
          </div>
          <div className={style.item__content}>
            <p>{currentProduct?.description}</p>
            <div className={style.item__content__labels}>
              <div>{currentProduct?.category.label}</div>
              <div>{currentProduct?.size}g</div>
              <div>Serve {currentProduct?.serving} pessoas</div>
              <div>R$ {currentProduct?.price?.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </section>
    </DefaultPage>
  );
}

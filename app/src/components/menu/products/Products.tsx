import style from "./Products.module.scss";
import productsList from "../../../data/ItemsList.json";
import { Ifilter } from "../../../types/Filter";
import { useState, useEffect } from "react";

interface Props {
  searchValue: string;
  filterValue: Ifilter | undefined;
}

export default function Products({ searchValue, filterValue }: Props) {
  const [list, setList] = useState(productsList);

  useEffect(() => {
    const newList = productsList.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setList(newList);
  }, [searchValue]);

  return (
    <>
      {list.map((item) => (
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

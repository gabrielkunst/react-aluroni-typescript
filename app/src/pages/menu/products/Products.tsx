import style from "./Products.module.scss";
import productsList from "../../../data/ProductsList.json";
import { useState, useEffect } from "react";

interface Props {
  searchValue: string;
  filterValue: string;
  orderValue: string | undefined;
}

export default function Products({
	searchValue,
	filterValue,
	orderValue,
}: Props) {
	const [list, setList] = useState(productsList);

	useEffect(() => {
		const newList = productsList.filter(
			(item) =>
				item.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        (filterValue ? item.category.label === filterValue : true)
		);
		switch (orderValue) {
		case "porcao":
			newList.sort((a, b) => (a.size < b.size ? -1 : 1));
			break;
		case "qtd_pessoas":
			newList.sort((a, b) => (a.serving < b.serving ? -1 : 1));
			break;
		case "preco":
			newList.sort((a, b) => (a.price < b.price ? -1 : 1));
			break;
		}
		setList(newList);
	}, [searchValue, filterValue, orderValue]);

	return (
		<>
			{list.length > 0 ? (
				list.map((item) => (
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
				))
			) : (
				<span className={style.warning}>Nenhum produto encontrado!</span>
			)}
		</>
	);
}

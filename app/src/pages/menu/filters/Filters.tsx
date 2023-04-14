import classNames from "classnames";
import FilterList from "../../../data/FiltersList.json";
import style from "./Filters.module.scss";

interface Props {
  filterValue: string;
  setFilterValue: (item: string) => void;
}

export default function Filters({ filterValue, setFilterValue }: Props) {
	return (
		<div className={style.filters}>
			{FilterList.map((item) => (
				<button
					onClick={() =>
						filterValue === item.label
							? setFilterValue("")
							: setFilterValue(item.label)
					}
					key={item.id}
					className={classNames({
						[style.filters__button]: true,
						[style.active]: filterValue === item.label ? true : false,
					})}
				>
					{item.label}
				</button>
			))}
		</div>
	);
}

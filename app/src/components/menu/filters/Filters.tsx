import classNames from "classnames";
import FilterList from "../../../data/FiltersList.json";
import style from "./Filters.module.scss";
import { Ifilter } from "../../../types/Filter";

interface Props {
  handleClickFilter: (button: Ifilter) => void;
}

export default function Filters({ handleClickFilter }: Props) {
  function handleClick() {}
  return (
    <div className={style.filters}>
      {FilterList.map((item) => (
        <button
          onClick={() => handleClickFilter(item)}
          key={item.id}
          className={classNames({
            [style.filters__button]: true,
            [style.active]: false,
          })}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

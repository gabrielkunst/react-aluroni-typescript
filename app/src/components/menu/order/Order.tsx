import { FaAngleDown } from "react-icons/fa";
import OptionsList from "../../../data/OptionsList.json";
import style from "./Order.module.scss";
import classNames from "classnames";
import { useState } from "react";

export default function Order() {
  return (
    <button
      className={classNames({
        [style.button]: true,
      })}
    >
      <div className={style.button__title}>
        <span>Ordenar por</span>
        <span>
          <FaAngleDown />
        </span>
      </div>
      <div
        className={classNames({
          [style.button__options]: true,
          [style.optionsActive]: false,
        })}
      >
        {OptionsList.map((item) => (
          <div key={item.value}>{item.nome}</div>
        ))}
      </div>
    </button>
  );
}

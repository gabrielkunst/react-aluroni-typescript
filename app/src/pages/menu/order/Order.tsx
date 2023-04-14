import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import OptionsList from "../../../data/OptionsList.json";
import style from "./Order.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Ioption } from "../../../types/Option";

interface Props {
  orderValue: Ioption | undefined;
  setOrderValue: (orderValue: Ioption | undefined) => void;
}

export default function Order({ orderValue, setOrderValue }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<button
			className={classNames({
				[style.button]: true,
			})}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				className={classNames({
					[style.button__title]: true,
					[style["button__title--active"]]:
            orderValue && orderValue.value != "",
				})}
			>
				<span>
					{orderValue?.value != "" && orderValue != undefined
						? orderValue.nome
						: "Ordernar por"}
				</span>
				<span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
			</div>
			<div
				className={classNames({
					[style.button__options]: true,
					[style.optionsActive]: isOpen,
				})}
			>
				{OptionsList.map((item) => (
					<div key={item.value} onClick={() => setOrderValue(item)}>
						{item.nome}
					</div>
				))}
			</div>
		</button>
	);
}

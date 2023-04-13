import style from "./Menu.module.scss";
import Search from "./search/Search";
import Filters from "./filters/Filters";
import Order from "./order/Order";
import Products from "./products/Products";
import { useState } from "react";
import { Ifilter } from "../../types/Filter";

export default function Cardapio() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<Ifilter>();

  function handleClickFilter(item: Ifilter) {}
  return (
    <section className={style.menu}>
      <h1>Cardápio</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <section className={style.menu__filters}>
        <Filters handleClickFilter={handleClickFilter} />
        <Order />
      </section>
      <section className={style.menu__products}>
        <Products />
      </section>
    </section>
  );
}

import style from "./Menu.module.scss";
import Search from "./search/Search";
import Filters from "./filters/Filters";
import Order from "./order/Order";
import Products from "./products/Products";
import { useEffect, useState } from "react";
import { Ifilter } from "../../types/Filter";
import { Ioption } from "../../types/Option";

export default function Cardapio() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [orderValue, setOrderValue] = useState<Ioption | undefined>();

  return (
    <section className={style.menu}>
      <h1>Cardápio</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <section className={style.menu__filters}>
        <Filters filterValue={filterValue} setFilterValue={setFilterValue} />
        <Order orderValue={orderValue} setOrderValue={setOrderValue} />
      </section>
      <section className={style.menu__products}>
        <Products
          filterValue={filterValue}
          searchValue={searchValue}
          orderValue={orderValue?.value}
        />
      </section>
    </section>
  );
}

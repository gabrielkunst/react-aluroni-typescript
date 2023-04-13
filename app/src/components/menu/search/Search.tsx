import style from "./Search.module.scss";
import { FaSearch } from "react-icons/fa";

interface Props {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export default function Search({ searchValue, setSearchValue }: Props) {
  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="Buscar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <span>
        <FaSearch />
      </span>
    </div>
  );
}

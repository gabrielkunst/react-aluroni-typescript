import Header from "src/components/header/Header";
import { Outlet } from "react-router-dom";
import style from "./DefaultPage.module.scss";
import Footer from "../footer/Footer";

export default function DefaultPage() {
  return (
    <main>
      <Header />
      <div className={style.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

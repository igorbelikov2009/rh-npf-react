import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logotypes from "../../general/Logotypes/Logotypes";
import { MenuLinkProps } from "../../ui/links/MenuLink/MenuLink";
import styles from "./MenuMobil.module.scss";

interface MenuMobilProps {
  closeMenuMobil: () => void;
}

const MenuMobil: FC<MenuMobilProps> = ({ closeMenuMobil }) => {
  const navigate = useNavigate();
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(true);

  const topLinks: MenuLinkProps[] = [
    { to: "/about", children: "О Фонде" },
    { to: "/managment", children: "Руководство Фондом" },
    { to: "/info", children: "Раскрытие информации" },
    { to: "/investment", children: "Инвестиционная деятельность" },
  ];
  const bottomLinks: MenuLinkProps[] = [
    { to: "/business", children: "Для бизнеса" },
    { to: "/#calculator", children: "Калькулятор" },
    { to: "/support#form", children: "Написать нам" },
    { to: "/support#questionsAnswers", children: "Вопросы и ответы" },
  ];

  return (
    <section className="menu-mobil">
      <div>
        <div className="menu-mobil__logos" onClick={() => navigate("/", { replace: true })}>
          <Logotypes isBackgroundWhite={isBackgroundWhite} />
        </div>

        {/* <router-link
        className="menu-mobil__link"
        v-for="route in firstBlock"
        :key="route.path"
        :to="route.path"
      >
        {{ route.label }}
      </router-link> */}

        <p className={styles["menu-mobil__title"]}>Клиентам</p>

        {/* <router-link
        className="menu-mobil__link"
        v-for="route in secondBlock"
        :key="route.path"
        :to="route.path"
      >
        {{ route.label }}
      </router-link> */}

        <div className={styles["menu-mobil__phone"]}>
          <a className={styles["menu-mobil__phone-link"]} href="tel:+78002004766">
            <p className={styles["menu-mobil__phone-number"]}>8 800 200-47-66</p>
          </a>
        </div>
      </div>

      <div>
        <p className={styles["menu-mobil__copy-right"]}>©2009-2019 НПФРенессанс. Пенсии</p>

        <p className={styles["menu-mobil__copy-right"]}>Лицензия № 383/2 от 16 июня 2009 года</p>
      </div>

      <button className={styles["menu-mobil__cross-switch"]}>
        <img
          className={styles["menu-mobil__cross-image"]}
          src="/icons/triple/Cross/Dark.svg"
          alt="cross"
          onClick={closeMenuMobil}
        />
      </button>
    </section>
  );
};

export default MenuMobil;

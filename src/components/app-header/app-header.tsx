import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import appHeaderStyles from "./app-header.module.css";

const AppHeader: FC = () => {
  return (
    <header className={appHeaderStyles.header}>
      <div className={appHeaderStyles.container}>
        <nav>
          <a
            className={appHeaderStyles.link}
            href="#"
          >
            <BurgerIcon type="primary" />
            Конструктор
          </a>
          <a
            className={appHeaderStyles.link}
            href="#"
          >
            <ListIcon type="primary" />
            Лента заказов
          </a>
        </nav>
        <Logo />
        <a
          className={appHeaderStyles.link}
          href="#"
        >
          <ProfileIcon type="primary" />
          Личный кабинет
        </a>
      </div>
    </header>
  );
};

export { AppHeader };

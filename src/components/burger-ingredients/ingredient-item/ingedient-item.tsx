import { FC } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from "./ingedient-item.module.css";
import { IngredientType } from "../../../utils/types";

interface IProps {
  ingredient: IngredientType;
  click: (ingredient: IngredientType) => void;
}

const IngedientItem: FC<IProps> = ({ ingredient, click }) => {
  const { image, image_large, name, price } = ingredient;
  return (
    <li className={ingredientStyles.listItem}>
      <button
        className={ingredientStyles.ingridient}
        onClick={() => {
          click(ingredient);
        }}
      >
        <img src={image} srcSet={`${image_large} 2x`} width={240} alt={name} />
        <span className={ingredientStyles.price}>
          {price} <CurrencyIcon className="pl-2" type="primary" />
        </span>
        <span className={ingredientStyles.name}>{name}</span>
        <Counter
          count={1}
          size="default"
          extraClass={ingredientStyles.counter}
        />
      </button>
    </li>
  );
};

export { IngedientItem };

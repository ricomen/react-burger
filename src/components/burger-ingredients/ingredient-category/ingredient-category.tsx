import { FC, PropsWithChildren } from "react";
import { IngedientItem } from "../ingredient-item/ingedient-item";
import ingredientsCategoryStyles from './ingredient-category.module.css'
import { IngredientType } from '../../../utils/types'

interface IProps {
  ingredients: IngredientType[];
  className?: string;
  heading?: string;
  click: (ingredient: IngredientType) => void;
}
const IngredientCategory: FC<PropsWithChildren<IProps>> = ({
  ingredients,
  heading,
  click,
}) => {
  return (
    <section className={ingredientsCategoryStyles.category}>
      {heading && <h2 className={ingredientsCategoryStyles.heading}>{heading}</h2>}
      <ul className={ingredientsCategoryStyles.list}>
        {ingredients?.map((it) => {
          return <IngedientItem key={it._id} click={click} ingredient={it} />;
        })}
      </ul>
    </section>
  );
};

export { IngredientCategory };

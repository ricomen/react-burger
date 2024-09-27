import { FC } from "react";
import { IngredientType } from "../../../utils/types";
import ingredientStyles from "./ingredients-details.module.css";

interface IProps {
  ingredient: IngredientType;
}

const IngredientsDetails: FC<IProps> = ({ ingredient }) => {
  const { name, image_large, proteins, fat, calories, carbohydrates } =
    ingredient;
  return (
    <div className={ingredientStyles.details}>
      <div className="text text_type_main-large">Детали ингредиента</div>
      <figure>
        <img
          className={ingredientStyles.image}
          src={image_large}
          width={480}
          height="auto"
          alt={name}
        />
        <figcaption className={ingredientStyles.name}>{name}</figcaption>
      </figure>
      <dl className={ingredientStyles.descriptopn}>
        <div>
          <dt className="text text_color_inactive text_type_main-default">Калории,ккал</dt>
          <dd className="text text text_color_inactive text_type_digits-default">{calories}</dd>
        </div>
        <div>
          <dt className="text text_color_inactive text_type_main-default">Белки, г</dt>
          <dd className="text text text_color_inactive text_type_digits-default">{proteins}</dd>
        </div>
        <div>
          <dt className="text text_color_inactive text_type_main-default">Жиры, г</dt>
          <dd className="text text text_color_inactive text_type_digits-default">{fat}</dd>
        </div>
        <div>
          <dt className="text text_color_inactive text_type_main-default">Углеводы, г</dt>
          <dd className="text text text_color_inactive text_type_digits-default">{carbohydrates}</dd>
        </div>
      </dl>
    </div>
  );
};

export { IngredientsDetails };

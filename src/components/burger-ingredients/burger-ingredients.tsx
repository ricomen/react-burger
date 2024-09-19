import { FC, useState, PropsWithChildren } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientCategory } from "./ingredient-category/ingredient-category";
import burgerIngredients from "./burger-ingredients.module.css";
import { IngredientType } from "../../utils/types";
import { Modal } from "../modal/modal";
import { IngredientsDetails } from "./ingredients-details/ingredients-details";

interface IProps {
  ingredients: IngredientType[];
  className?: string;
}

enum INGRIDIENT_TYPES {
  BUN = "bun",
  SAUCE = "sauce",
  MAIN = "main",
}

const BurgerIngredients: FC<PropsWithChildren<IProps>> = ({
  className,
  ingredients,
}) => {
  const [isActive, setIsActive] = useState("one");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [detailIngredient, setDetailIngredient] =useState<{}>({});
  const ingredientsBun = ingredients.filter(
    (ingredient) => ingredient.type === INGRIDIENT_TYPES.BUN
  );
  const ingredientsSauce = ingredients.filter(
    (ingredient) => ingredient.type === INGRIDIENT_TYPES.SAUCE
  );
  const ingredientsMain = ingredients.filter(
    (ingredient) => ingredient.type === INGRIDIENT_TYPES.MAIN
  );

  const click = (ingedient: IngredientType) => {
    setDetailIngredient(ingedient);
    setIsShowModal(true);
  };

  return (
    <section className={`${burgerIngredients.burgerIngredients} ${className}`}>
      <div className={burgerIngredients.burgerIngredientsTabs}>
        <Tab active={isActive === "one"} value="one" onClick={setIsActive}>
          Булки
        </Tab>
        <Tab active={isActive === "two"} value="two" onClick={setIsActive}>
          Соусы
        </Tab>
        <Tab active={isActive === "three"} value="three" onClick={setIsActive}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredients.ingridientList}>
        <IngredientCategory
          ingredients={ingredientsBun}
          click={click}
          heading="Булки"
        />
        <IngredientCategory
          ingredients={ingredientsSauce}
          click={click}
          heading="Соусы"
        />
        <IngredientCategory
          ingredients={ingredientsMain}
          click={click}
          heading="Начинки"
        />
      </div>

      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <IngredientsDetails ingredient={detailIngredient} />
        </Modal>
      )}
    </section>
  );
};

export { BurgerIngredients };

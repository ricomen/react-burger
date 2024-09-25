import { FC, PropsWithChildren, useEffect, useState } from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientType } from "../../utils/types";
import constructorStyles from "./burger-constructor.module.css";
import { Modal } from "../modal/modal";
import { OrderDetail } from "./order-detail/order-detail";

interface IProps {
  ingredients: IngredientType[];
  className?: string;
}

const INITIAL_STATE = {
  _id: "",
  name: "",
  type: "",
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: "",
  image_mobile: "",
  image_large: "",
  __v: 0,
};

const BURGER_BUN_COUNT: number = 2;

const bunTotalSumm = (price: number): number => price * BURGER_BUN_COUNT;

const BurgerConstructor: FC<PropsWithChildren<IProps>> = ({
  className,
  ingredients,
}) => {
  const [bun, setBun] = useState<IngredientType>(INITIAL_STATE);
  const [totoalSumm, setTotoalSumm] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [ingredientsList, setIngredientsList] = useState<IngredientType[]>([]);

  const ingredientsWithoutBuns = ingredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );

  const getTotalSumm =
    ingredientsList.reduce((acc, current) => {
      return acc + current.price;
    }, 0) + bunTotalSumm(bun.price);

  useEffect(() => {
    ingredients.find((ingredient) => {
      if (ingredient.type === "bun") setBun(ingredient);
    });
    setIngredientsList(ingredientsWithoutBuns);
    setTotoalSumm(getTotalSumm);
  }, []);

  useEffect(() => {
    setTotoalSumm(getTotalSumm);
  }, [ingredientsList]);

  const handleClose = (_id: string): void => {
    setIngredientsList(ingredientsList.filter((it) => it._id !== _id));
  };

  return (
    <section className={`${constructorStyles.constructorWrapper} ${className}`}>
      <div className="pl-8">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="pr-4"
        />
      </div>

      <ul className={constructorStyles.ingridientList}>
        {ingredientsList.map((ingredient) => {
          return (
            <li
              className={constructorStyles.ingridientItem}
              key={ingredient._id}
            >
              <DragIcon
                className={constructorStyles.constructorElementIcon}
                type="primary"
              />
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                extraClass={constructorStyles.constructorElement}
                handleClose={() => handleClose(ingredient._id)}
              />
            </li>
          );
        })}
      </ul>
      <div className="pl-8">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>

      <div className={constructorStyles.totalSummWrapper}>
        <p
          className={`${constructorStyles.totalSummValue} text text_type_digits-default pr-10`}
        >
          {totoalSumm}
          <CurrencyIcon type="primary" className="pl-2" />
        </p>
        <Button htmlType="button" onClick={() => setShowModal(true)}>
          Оформить заказ
        </Button>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <OrderDetail />
        </Modal>
      )}
    </section>
  );
};

export { BurgerConstructor };

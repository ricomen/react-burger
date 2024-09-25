import { AppHeader } from "../app-header/app-header.js";
import { BurgerIngredients } from "../burger-ingredients/index.js";
import { BurgerConstructor } from "../burger-constructor/index.js";
import appHeaderStyles from "./app.module.css";
import { useEffect, useState } from "react";
import { IngredientType } from "../../utils/types";

function App() {
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [ingredients, setIngredients] = useState<IngredientType[] | []>([]);

  useEffect(() => {
    try {
      setLoading(true);
      setError(false);
      const getIngredients = async () => {
        const res = await fetch(
          "https://norma.nomoreparties.space/api/ingredients"
        );
        const data = await res.json();
        setIngredients(data.data);
        setLoading(false);
      };
      getIngredients();
    } catch (error) {
      setError(true);
      console.error(error)
    }
  }, []);

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <>
      <AppHeader />
      <main className={appHeaderStyles.main}>
        <h1 className={appHeaderStyles.title}>Соберите бургер</h1>
        <div className={appHeaderStyles.mainContent}>
          {loading ? (
            <div>Загрузка</div>
          ) : error ? (
            <div>Ошибка</div>
          ) : (
            <>
              <BurgerIngredients
                ingredients={ingredients}
                className={appHeaderStyles.burgerIngredients}
              />
              <BurgerConstructor
                ingredients={ingredients}
                className={appHeaderStyles.burgerConstructor}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export { App };

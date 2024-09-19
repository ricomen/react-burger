// import {useState} from 'react'
import { AppHeader } from "./components/app-header/index.js";
import { BurgerIngredients } from "./components/burger-ingredients/index.js";
import { BurgerConstructor } from "./components/burger-constructor/index.js";
import {ingredients} from './utils/data.js'
import "./App.css";



function App() {
  return (
    <>
      <AppHeader />
      <main className='pt-10 pr-5 pb-10 pl-5 main'>
        <h1 className="mb-5 text text_type_main-large">Соберите бургер</h1>
        <div className="main-content">
          <BurgerIngredients ingredients={ingredients} className="w-50" />
          <BurgerConstructor ingredients={ingredients} className="w-50" />
        </div>
      </main>
    </>
  );
}

export default App;

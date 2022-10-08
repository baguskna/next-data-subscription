import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import { AppContextValueSchema, useAppContext } from "../context/state";
import { Shoe } from "../lib/utils";

const Home: NextPage = () => {
  const { counter, setCounter, cart, setCart } =
    useAppContext() as AppContextValueSchema;

  const changeState = () => {
    setCounter(counter + 1);
  };

  const addToCart = () => {
    const newShoe: Shoe = {
      name: "nike zoom",
      price: 1500000,
    };
    const newShoes = [...cart, newShoe];
    setCart(newShoes);
  };

  const removeFromCart = () => {
    cart.splice(-1);
    const newCart = [...cart];
    setCart(newCart);
  };

  return (
    <>
      <Header></Header>
      <div>
        Bagus
        <button onClick={changeState}>+</button>
        <button onClick={addToCart}>Add shoe</button>
        <button onClick={removeFromCart}>Remove shoe</button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;

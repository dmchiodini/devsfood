import React from "react";
import { CartArea, CartHeader, CartBody, CartIcon, CartText } from "./styled";
import cartImg from "../../assets/cart.png";

export default () => {
  return (
    <CartArea>
      <CartHeader>
        <CartIcon src={cartImg} />
        <CartText>Meu Carrinho (x)</CartText>
      </CartHeader>
      <CartBody></CartBody>
    </CartArea>
  );
};

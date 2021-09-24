import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIngredients,
  ProdButton,
  ProductQuantity,
  ProductQtImage,
  ProductText,
  ProductPrice,
} from "./styled";
import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();
  const [qt, setQt] = useState(1);

  const handleCancelButton = () => {
    setStatus(false);
  };

  const handleMinusQt = () => {
    if (qt > 1) {
      setQt(qt - 1);
    }
  };

  const handlePlusQt = () => {
    setQt(qt + 1);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        data,
        qt,
      },
    });
    setStatus(false);
  };

  useEffect(() => {
    setQt(1);
  }, [data]);

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src={minusImg} onClick={handleMinusQt} />
              <ProductText>{qt}</ProductText>
              <ProductQtImage src={plusImg} onClick={handlePlusQt} />
            </ProductQuantity>
            <ProductPrice>R$ {(data.price * qt).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProdButton small={true} onClick={handleCancelButton}>
          Cancelar
        </ProdButton>
        <ProdButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProdButton>
      </ProductButtons>
    </Container>
  );
};

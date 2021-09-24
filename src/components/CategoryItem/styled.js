import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.active === props.id ? "#FFF" : "#aae09a"};
  border-radius: 20px;
  margin-right: 10px;
  transition: all ease 0.3s;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 55px;
  height: 55px;
`;

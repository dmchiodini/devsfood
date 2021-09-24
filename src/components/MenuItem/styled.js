import styled from "styled-components";

export const LinkArea = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  background-color: ${(props) => (props.active ? "#0B4D08" : "")};
  border-radius: 10px;
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: auto;
`;

import React, { useState } from "react";
import { Container, Logo, SearchInput } from "./styled";
import logoImg from "../../assets/logo.png";

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search === "" ? false : true);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if (search === "") {
      setInputActive(false);
    }
  };

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <Logo src={logoImg} />
      <SearchInput
        type="text"
        placeholder="Digite um produto..."
        value={search}
        onChange={handleChange}
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

/* eslint-disable import/named */
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LinkArea, LinkIcon } from "./styled";

export default ({ icon, link, title }) => {
  const history = useHistory();
  const location = useLocation();

  let isActive = location.pathname === link;

  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <LinkArea
      data-tip={title}
      data-for="tip-right"
      active={isActive}
      href={link}
      onClick={handleClick}
    >
      <LinkIcon src={icon} />
    </LinkArea>
  );
};

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledImg = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : '20px')};
  height: auto;
  margin: 0 5px;
`;

interface ButtonProps {
  name: string;
  to: string;
  icon: string;
  width?: number;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {name, to, icon, width} = props;

  return (
    <Link to={to}>
      <StyledImg src={icon} alt={name} width={width}/>
    </Link>
  )
};

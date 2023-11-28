import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

interface PageTitleProps {
  text: string;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
  const {text} = props;

  return (
    <StyledP>{text}</StyledP>
  )
};

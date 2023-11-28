import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  margin: 0 auto 15px;
  display: block;
`;

interface SearchProps {
  search: string;
  handleChange: (currentVal: string) => void;
}

const Search: React.FC<SearchProps> = ({search, handleChange}) => {
  return (
    <StyledInput
      type="search"
      name="searh-form"
      placeholder="Search users by name"
      value={search}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
export default Search;

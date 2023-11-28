import React from "react";
import styled from "styled-components";
import {IPost} from "../../../store/type";

const StyledDiv = styled.div`
  width: 100%;
  background-color: #ececd8;
  padding: 0 10px;
  border-radius: 5px;
  margin-bottom: 5px;

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }
`;

interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = (props) => {
  const {post} = props;
  return (
    <StyledDiv>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </StyledDiv>
  )
};

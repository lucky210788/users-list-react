import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectIsPostsLoading, selectPostsListData} from "../../store/posts/selectors";
import {usePosts} from "../../store/posts/usePosts";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Post} from "./Post";
import Spinner from "../Spinner";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin: auto;
`;

export const PostsList: React.FC = () => {
  const {userId} = useParams();
  const postsListData = useSelector(selectPostsListData);
  const isPostsLoading = useSelector(selectIsPostsLoading);
  const {getPosts} = usePosts();

  useEffect(() => {
    userId && getPosts(Number(userId));
  }, [userId]);

  return (
    <StyledDiv>
      {
        postsListData && postsListData.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
      {
        !postsListData && !isPostsLoading && <h5>No data</h5>
      }
      {isPostsLoading && <Spinner />}
    </StyledDiv>
  )
};

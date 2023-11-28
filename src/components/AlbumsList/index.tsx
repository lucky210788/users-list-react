import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectAlbumsListData, selectIsAlbumsLoading} from "../../store/albums/selectors";
import {useAlbums} from "../../store/albums/useAlbums";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import Spinner from "../Spinner";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin: auto;
`;

const StyledP = styled.p`
  margin: 0 auto 5px;
`;

export const AlbumsList: React.FC = () => {
  const {userId} = useParams();
  const albumsListData = useSelector(selectAlbumsListData);
  const isAlbumsLoading = useSelector(selectIsAlbumsLoading);
  const {getAlbums} = useAlbums();

  useEffect(() => {
    userId && getAlbums(Number(userId));
  }, [userId]);

  return (
    <StyledDiv>
      {
        albumsListData && albumsListData.map(album => (
          <StyledP key={album.id}>{album.title}</StyledP>
        ))
      }
      {
        !albumsListData && !isAlbumsLoading && <h5>No data</h5>
      }
      {isAlbumsLoading && <Spinner />}
    </StyledDiv>
  )
};

import React from "react";
import {Button} from "../../components/Button";
import routes from "../../navigation/routes";
import BackIcon from "../../assets/images/arrow_back_icon.png";
import Tooltip from "../../components/Tooltip";
import {PageTitle} from "../../components/PageTitle";
import {AlbumsList} from "../../components/AlbumsList";

const Albums: React.FC = () => {
  return (
    <>
      <Tooltip text="Users list">
        <Button
          name='Users list'
          to={routes.root}
          icon={BackIcon}
          width={50}
        />
      </Tooltip>
      <PageTitle text="Albums" />
      <AlbumsList />
    </>
  )
}
export default Albums;

import React from "react";
import styled from "styled-components";
import {User} from "../../store/type";
import {Button} from "../Button";
import PostsIcon from "../../assets/images/posts_icon.png";
import AlbumsIcon from "../../assets/images/albums_icon.png";
import Tooltip from "../Tooltip";

const StyledTable = styled.table`
  margin: auto;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  width: 500px;

  * {
    box-sizing: border-box;
  }

  td,
  th {
    padding: 5px;
    border: none;

    &:nth-child(1) {
      width: 10%;
      text-align: center;
    }

    &:nth-child(2) {
      width: 35%;
    }

    &:nth-child(3) {
      width: 35%;
    }

    &:nth-child(4) {
      width: 14%;
    }
  }

  tbody tr {
    font-size: 14px;

    &:nth-of-type(2n + 2) {
      background-color: #efefef;
    }
  }

  thead > tr {
    background-color: #cac2c2;
    font-size: 15px;
  }

  .triangle {
    position: relative;
    cursor: pointer;
    &-asc {
      &:before {
        content: '';
        transform: translateY(-50%) rotate(0deg);
      }
    }
    &-desc {
      &:before {
        content: '';
        transform: translateY(-50%) rotate(180deg);
      }
    }

    &:before {
      position: absolute;
      right: 30px;
      top: 50%;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent #000000 transparent;
    }
  }
`;

interface TableProps {
  users: User[];
  isDesc: boolean | null;
  handleColumnClick: () => void;
}

const Table: React.FC<TableProps> = (props) => {
  const {users, isDesc, handleColumnClick} = props;

  return (
    <StyledTable>
      <thead>
      <tr>
        <th>id</th>
        <th
          className={`triangle ${isDesc === true ? 'triangle-desc' : isDesc === false ? 'triangle-asc' : ''}`}
          onClick={handleColumnClick}
        >
          name
        </th>
        <th>email</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {users && users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Tooltip text="Posts">
              <Button
                name="Posts"
                to={`/posts/${user.id}`}
                icon={PostsIcon}
              />
            </Tooltip>
            <Tooltip text="Albums">
              <Button
                name="Albums"
                to={`/albums/${user.id}`}
                icon={AlbumsIcon}
              />
            </Tooltip>
          </td>
        </tr>
      ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;

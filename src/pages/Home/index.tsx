import React, {useEffect, useState} from "react";
import Search from "../../components/Search";
import {useSelector} from "react-redux";
import {selectIsUsersLoading, selectUsersListData} from "../../store/users/selectors";
import {useUsers} from "../../store/users/useUsers";
import Table from "../../components/Table";
import {User} from "../../store/type";
import Spinner from "../../components/Spinner";

const Home: React.FC = () => {
  const usersListData = useSelector(selectUsersListData);
  const isUsersLoading = useSelector(selectIsUsersLoading);
  const {getUsers,} = useUsers();
  const [search, setSearch] = useState<string>('');
  const [isDesc, setIsDesc] = React.useState<boolean | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  const handleChange = (currentVal: string) => {
    setSearch(currentVal);
  };

  const handleSort = (column: string, ascending: boolean) => {
    const sorted = [...(users || [])].sort((a: any, b: any) => {
      const aValue = a[column] ?? '';
      const bValue = b[column] ?? '';

      return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    setUsers(sorted);
  };

  const handleColumnClick = () => {
    setIsDesc(prev => !prev);
  };

  useEffect(() => {
    if (search.trim()) {
      const result = usersListData!.filter((user: User) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setUsers(result);
    } else {
      setUsers(usersListData);
    }
  }, [search, usersListData]);

  useEffect(() => {
    isDesc !== null && handleSort('name', isDesc);
  }, [isDesc]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {isUsersLoading && <Spinner />}
      {
        users && <>
          <Search search={search} handleChange={handleChange}/>
          <Table
          users={users}
          isDesc={isDesc}
          handleColumnClick={handleColumnClick}
        />
        </>
      }
    </>
  )
}
export default Home;

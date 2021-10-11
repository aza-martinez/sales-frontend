import React, { useEffect, useState, useMemo, useContext } from "react";
import UsersService from "../../services/UsersService";
import Dropdown from "../Dropdown";
import UserContext from "../../context/UserContext";

const DropdownUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await UsersService.getAll();
      setUsers(data);
    };

    getUsers();
    if (users) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const usersToDropdown = useMemo(() => {
    return users.map(({ id, name }) => ({ value: id, label: name }));
  }, [users]);

  const handleOnChange = ({ value }) => {
    setUser(value);
  };

  if (!users && isLoading) return "Cargando...";

  return (
    <Dropdown
      options={usersToDropdown}
      onChange={handleOnChange}
      label="Selecciona un usuario"
    />
  );
};

export default DropdownUsers;

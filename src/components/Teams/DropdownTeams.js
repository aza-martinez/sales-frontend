import React, { useEffect, useState, useMemo, useContext } from "react";
import TeamService from "../../services/TeamsService";
import Dropdown from "../Dropdown";
import TeamContext from "../../context/TeamContext";

const DropdownTeams = () => {
  const { setTeam } = useContext(TeamContext);
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setUsers] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const { data } = await TeamService.getAll();
      setUsers(data);
    };

    getTeams();
    if (teams) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const teamsToDropdown = useMemo(() => {
    return teams.map(({ id, name }) => ({ value: id, label: name }));
  }, [teams]);

  const handleOnChange = ({ value }) => {
    setTeam(value);
  };

  if (isLoading && !teams) return "Cargando...";

  return (
    <Dropdown
      options={teamsToDropdown}
      onChange={handleOnChange}
      label="Selecciona un Equipo:"
    />
  );
};

export default DropdownTeams;

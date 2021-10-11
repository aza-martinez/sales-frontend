import DropdownUsers from "../Users/DropdownUsers";
import DropdownTeams from "../Teams/DropdownTeams";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="container">
      <div className="filter">
        <DropdownUsers />
        <DropdownTeams />
      </div>
    </div>
  );
};

export default Filter;

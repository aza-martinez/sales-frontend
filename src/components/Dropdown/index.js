import { memo } from "react";
import ReactSelect from "react-select";
import "./Dropdown.scss";

const Dropdown = ({ label, ...props }) => {
  return (
    <div className="dropdown">
      <label className="dropdown__label">{label}</label>
      <ReactSelect {...props} />
    </div>
  );
};

export default memo(Dropdown);

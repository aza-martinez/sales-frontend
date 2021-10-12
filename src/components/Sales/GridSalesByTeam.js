import React, { useContext, useEffect, useState } from "react";
import TeamContext from "../../context/TeamContext";
import SalesService from "../../services/SalesService";
import Grid from "../Grid/Index";

const GridSalesByTeam = () => {
  const { team } = useContext(TeamContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      if (team) {
        const { data } = await SalesService.getSalesByTeam(team);
        setSales(data);
      } else {
        setSales([]);
      }
    };

    getSales();
  }, [team]);

  if (sales.length <= 0) return null;

  return (
    <div className="container">
      <Grid data={sales} title={"Ventas por equipo"} />
    </div>
  );
};

export default GridSalesByTeam;

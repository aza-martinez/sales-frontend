import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import SalesService from "../../services/SalesService";
import Grid from "../Grid/Index";

const GridSalesForUser = () => {
  const { user } = useContext(UserContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      if (user) {
        const { data } = await SalesService.getSalesByUser(user);
        setSales(data);
      } else {
        setSales([]);
      }
    };

    getSales();
  }, [user]);

  if (sales.length <= 0) return null;

  return (
    <div className="container">
      <Grid data={sales} title={"Ventas por Usuario"} />
    </div>
  );
};

export default GridSalesForUser;

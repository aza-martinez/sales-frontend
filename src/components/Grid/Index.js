import React from "react";
import "./Grid.scss";

const COLUMNS = [
  { value: "SaleID", label: "ID de Venta" },
  { value: "SaleDate", label: "Fecha" },
  { value: "ClientName", label: "Cliente" },
  { value: "AmountSale", label: "Monto" },
  { value: "TeamName", label: "Equipo" },
  { value: "UserName", label: "Usuario" },
];

const Grid = ({ data }) => {
  return (
    <table className="grid">
      <thead className="grid___head">
        <tr className="grid__row">
          {COLUMNS &&
            COLUMNS.map((column) => (
              <th className="grid__column">{column.label}</th>
            ))}
        </tr>
      </thead>
      <tbody className="grid__body">
        {data.map((d) => {
          return (
            <tr className="grid__row">
              {COLUMNS.map(({ value }) => (
                <td className="grid__row--item">{d[value]}</td>
              ))}
            </tr>
          );
        })}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Grid;

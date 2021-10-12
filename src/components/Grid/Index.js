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

const Grid = ({ data, title }) => {
  return (
    <div className="grid">
      <h3 className="grid__title">{title}</h3>
      <table className="grid__table">
        <thead className="grid__head">
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
    </div>
  );
};

export default Grid;

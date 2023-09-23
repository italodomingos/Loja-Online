import React, { useEffect, useState } from "react";
import AdminHome from "../../AdminHome";
import AdminList from "../../list/AdminList";
import axios from "axios";

export default function AdminProduct() {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "description", headerName: "Descrição", width: 200 },
    { field: "price", headerName: "preço", width: 70 },
    { field: "ampers", headerName: "Amperagem", width: 70 },
    { field: "warranty", headerName: "Garantia", width: 130 },
    { field: "terminalType", headerName: "Lado do Terminal", width: 130 },
    { field: "boxSize", headerName: "Tamanho da caixa", width: 130 },
    {
      field: "productTypeDescription",
      headerName: "Tipo de produto",
      width: 130,
    },
    { field: "warranty", headerName: "Garantia", width: 130 },
  ];

  useEffect(() => {
    axios.get("http://localhost:3001/api/product").then((response) => {
      setRows(
        response.data.map((row) => {
          return {
            ...row,
            productTypeDescription: row.ProductType.description,
          };
        })
      );
    });
  }, []);

  return (
    <AdminHome>
      <AdminList columns={columns} rows={rows} reference="product" />
    </AdminHome>
  );
}

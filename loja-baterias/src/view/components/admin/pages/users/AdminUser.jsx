import React from "react";
import AdminList from "../../list/AdminList";
import AdminHome from "../../AdminHome";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUser() {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "type", headerName: "Tipo", width: 130 },
  ];

  useEffect(() => {
    axios.get("http://localhost:3001/api/user").then((response) => {
      setRows(
        response.data.map((row) => {
          return {
            ...row,
            type: row.UserType.description,
          };
        })
      );
    });
  }, []);

  return (
    <AdminHome>
      <AdminList columns={columns} rows={rows} reference="user" />
    </AdminHome>
  );
}

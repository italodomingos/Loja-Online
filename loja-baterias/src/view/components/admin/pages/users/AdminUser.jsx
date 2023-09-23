import React from "react";
import AdminList from "../../list/AdminList";
import AdminHome from "../../AdminHome";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUser() {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "name", headerName: "Nome", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "type", headerName: "Tipo", width: 130 },
  ];

  useEffect(() => {
    listUsers();
  }, []);

  function listUsers() {
    axios
      .get("http://localhost:3001/api/user")
      .then((response) => {
        setRows(
          response.data.map((row) => {
            return {
              ...row,
              type: row.UserType?.description,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function searchEvent(e) {
    e.preventDefault();
    if (e.target.value) {
      axios
        .post("http://localhost:3001/api/user/search", {
          text: e.target.value,
        })
        .then((response) => {
          setRows(
            response.data.map((row) => {
              return {
                ...row,
                type: row.UserType.description,
              };
            })
          );
        });
    } else {
      listUsers();
    }
  }

  return (
    <AdminHome>
      <AdminList
        columns={columns}
        rows={rows}
        reference="user"
        searchEvent={searchEvent}
        setRows={setRows}
      />
    </AdminHome>
  );
}

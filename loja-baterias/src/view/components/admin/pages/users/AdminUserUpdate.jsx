import React, { useEffect, useState } from "react";
import AdminHome from "../../AdminHome";
import FormUser from "./FormUser";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AdminUserUpdate() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <AdminHome>
      <FormUser userData={user} action="Editar" />
    </AdminHome>
  );
}

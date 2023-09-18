import React from "react";
import AdminHome from "../../AdminHome";
import FormUser from "./FormUser";

export default function AdminUserCreate() {
  return (
    <AdminHome>
      <FormUser action="Criar" />
    </AdminHome>
  );
}

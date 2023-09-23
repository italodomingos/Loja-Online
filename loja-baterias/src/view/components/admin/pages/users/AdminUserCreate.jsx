import React from "react";
import AdminHome from "../../AdminHome";
import FormUtil from "../../layout/FormUtil";

export default function AdminUserCreate() {
  const data = [
    { name: "name", type: "text", description: "Nome" },
    { name: "email", type: "email", description: "E-mail" },
    { name: "password", type: "password", description: "Senha" },
    {
      name: "UserTypeId",
      type: "select",
      description: "Tipo de Usuário",
      reference: "userType",
    },
  ];
  return (
    <AdminHome>
      <FormUtil data={data} action="Criar" />
    </AdminHome>
  );
}

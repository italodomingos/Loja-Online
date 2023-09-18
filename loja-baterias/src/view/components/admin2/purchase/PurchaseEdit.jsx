import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export default function PurchaseEdit(props) {
  return (
    <Edit title="Editar um Tipo de Produto" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="description" label="Descrição" />
      </SimpleForm>
    </Edit>
  );
}

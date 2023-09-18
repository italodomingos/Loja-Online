import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export default function BrandEdit(props) {
  return (
    <Edit title="Editar uma Marca" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="description" label="Descrição" />
      </SimpleForm>
    </Edit>
  );
}

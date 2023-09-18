import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export default function ProductTypeCreate(props) {
  return (
    <Create title="Criar um Tipo de Produto" {...props}>
      <SimpleForm>
        <TextInput source="description" label="Descrição" />
      </SimpleForm>
    </Create>
  );
}

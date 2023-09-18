import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export default function BrandCreate(props) {
  return (
    <Create title="Criar uma Marca" {...props}>
      <SimpleForm>
        <TextInput source="description" label="Descrição" />
      </SimpleForm>
    </Create>
  );
}

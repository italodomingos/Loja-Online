import React from "react";
import {
  Edit,
  PasswordInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export default function UserEdit(props) {
  return (
    <Edit title="Editar um Usuario" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" label="Nome" />
        <TextInput source="email" label="Email" />
        <PasswordInput source="password" label="Senha" />
        <ReferenceInput source="UserTypeId" reference="userType">
          <SelectInput optionText="description" label="Tipo de Usuário" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}

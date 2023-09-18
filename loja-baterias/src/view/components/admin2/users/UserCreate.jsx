import React from "react";
import {
  Create,
  PasswordInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export default function UserCreate(props) {
  return (
    <Create title="Criar um Usuario" {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nome" />
        <TextInput source="email" label="Email" />
        <PasswordInput source="password" label="Senha" />
        <ReferenceInput source="UserTypeId" reference="userType">
          <SelectInput optionText="description" label="Tipo de Usuário" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}

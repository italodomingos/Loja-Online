import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export default function UserTypeCreate(props) {
  return (
    <Create title="Criar um Tipo de Usuario" {...props}>
      <SimpleForm>
        <TextInput source="description" label="Descrição" />
        <ArrayInput source="permissions" label="Permissôes">
          <SimpleFormIterator>
            <TextInput label="Permissão" source="" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}

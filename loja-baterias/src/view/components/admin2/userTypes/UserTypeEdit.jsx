import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export default function UserTypeEdit(props) {
  return (
    <Edit title="Editar um Tipo de Usuario" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="description" label="Descrição" />
        <ArrayInput source="permissions" label="Permissões">
          <SimpleFormIterator>
            <TextInput label="Permissão" source="" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}

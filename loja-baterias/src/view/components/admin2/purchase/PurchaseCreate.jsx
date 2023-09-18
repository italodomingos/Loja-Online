import React from "react";
import {
  Create,
  NumberInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

export default function PurchaseCreate(props) {
  return (
    <Create title="Criar um Tipo de Produto" {...props}>
      <SimpleForm>
        <ReferenceInput source="UserId" reference="user">
          <SelectInput optionText="name" label="Usuário" />
        </ReferenceInput>

        <ReferenceArrayInput
          source="description"
          reference="product"
        ></ReferenceArrayInput>

        <NumberInput source="Product.PurchaseItems.quantity" />
      </SimpleForm>
    </Create>
  );
}

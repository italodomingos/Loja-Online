import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ArrayField,
} from "react-admin";
import RenderArray from "../layout/RenderArray";

export default function PurchaseList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="User.name" label="Usuário" />
        <ArrayField source="Products" label="Produtos">
          <RenderArray />
        </ArrayField>

        <EditButton basePath="purchase" />
        <DeleteButton basePath="purchase" />
      </Datagrid>
    </List>
  );
}

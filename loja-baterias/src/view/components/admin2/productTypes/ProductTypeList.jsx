import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function ProductTypeList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" />
        <EditButton basePath="productType" />
        <DeleteButton basePath="productType" />
      </Datagrid>
    </List>
  );
}

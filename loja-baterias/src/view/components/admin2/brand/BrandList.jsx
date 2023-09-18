import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function BrandList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" />
        <EditButton basePath="brand" />
        <DeleteButton basePath="brand" />
      </Datagrid>
    </List>
  );
}

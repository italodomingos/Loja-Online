import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function UserList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="password" />
        <TextField source="UserType.description" />

        <EditButton basePath="user" />
        <DeleteButton basePath="user" />
      </Datagrid>
    </List>
  );
}

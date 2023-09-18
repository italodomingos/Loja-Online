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

export default function UserTypeList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" />
        <ArrayField source="permissions">
          <RenderArray />
        </ArrayField>
        <EditButton basePath="userType" />
        <DeleteButton basePath="userType" />
      </Datagrid>
    </List>
  );
}

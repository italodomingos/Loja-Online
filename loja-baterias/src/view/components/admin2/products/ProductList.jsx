import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function ProductList(props) {
  return (
    <List {...props}>
      <Datagrid>
        {/* <TextField source="id" /> */}
        <TextField source="description" label="Descrição" />
        <NumberField source="price" label="Preço" />
        <NumberField source="ampers" label="Amperagem" />
        <NumberField source="warranty" label="Garantia" />
        <TextField source="terminalType" label="Tipo Terminal" />
        <TextField source="boxSize" label="Tamanho Caixa" />
        <TextField source="Brand.description" label="Marca" />
        <TextField source="ProductType.description" label="Tipo Produto" />
        <EditButton basePath="product" label="Editar" />
        <DeleteButton basePath="product" label="Deletar" />
      </Datagrid>
    </List>
  );
}

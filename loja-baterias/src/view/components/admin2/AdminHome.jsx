import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import UserList from "./users/UserList";
import UserTypeList from "./userTypes/UserTypeList";
import UserCreate from "./users/UserCreate";
import UserEdit from "./users/UserEdit";
import UserTypeCreate from "./userTypes/UserTypeCreate";
import UserTypeEdit from "./userTypes/UserTypeEdit";
import ProductTypeList from "./productTypes/ProductTypeList";
import ProductTypeCreate from "./productTypes/ProductTypeCreate";
import ProductTypeEdit from "./productTypes/ProductTypeEdit";
import BrandList from "./brand/BrandList";
import BrandCreate from "./brand/BrandCreate";
import BrandEdit from "./brand/BrandEdit";
import ProductList from "./products/ProductList";
import ProductCreate from "./products/ProductCreate";
import ProductEdit from "./products/ProductEdit";
import PurchaseCreate from "./purchase/PurchaseCreate";
import PurchaseList from "./purchase/PurchaseList";

export default function AdminHome() {
  return (
    <Admin
      basename="/admin"
      dataProvider={restProvider("http://localhost:3001/api/")}
    >
      <Resource
        name="user"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        options={{ label: "Usuários" }}
      />
      <Resource
        name="userType"
        list={UserTypeList}
        create={UserTypeCreate}
        edit={UserTypeEdit}
        options={{ label: "Tipos de Usuários" }}
      />
      <Resource
        name="productType"
        options={{ label: "Tipos de Produtos" }}
        list={ProductTypeList}
        create={ProductTypeCreate}
        edit={ProductTypeEdit}
      />
      <Resource
        name="brand"
        options={{ label: "Marcas" }}
        list={BrandList}
        create={BrandCreate}
        edit={BrandEdit}
      />
      <Resource
        name="product"
        options={{ label: "Produtos" }}
        list={ProductList}
        create={ProductCreate}
        edit={ProductEdit}
      />
      <Resource
        name="purchase"
        options={{ label: "Compras" }}
        create={PurchaseCreate}
        list={PurchaseList}
      />
    </Admin>
  );
}

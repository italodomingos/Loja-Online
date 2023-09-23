import React, { useEffect, useState } from "react";
import FormUtil from "../../layout/FormUtil";
import AdminHome from "../../AdminHome";
import axios from "axios";

export default function AdminProductCreate() {
  // const [data, setData] = useState({})
  // useEffect(()=>{
  //   axios.get("https://localhost:3001/api/product").then((response)=>{
  //     const obj = response.data.map((product)=>{
  //       return { name: "description", value: "", type: "text", description: "Nome Completo" }
  //     })
  //   })
  // },[])
  const data = [
    { name: "description", type: "text", description: "Descrição" },
    { name: "price", type: "number", description: "Preço" },
    { name: "ampers", type: "number", description: "Amperagem" },
    { name: "warranty", type: "number", description: "Garantia em dias" },
    {
      name: "terminalType",
      type: "select",
      description: "Lado do Terminal",
      options: ["D", "E"],
    },
    {
      name: "boxSize",
      type: "select",
      description: "Tamanho da Caixa",
      options: ["Alta", "Baixa"],
    },
    {
      name: "ProductTypeId",
      type: "select",
      description: "Tipo de Produto",
      reference: "productType",
    },

    {
      name: "BrandId",
      type: "select",
      description: "Marca",
      reference: "brand",
    },
  ];
  return (
    <AdminHome>
      <FormUtil data={data} action="Criar" />
    </AdminHome>
  );
}

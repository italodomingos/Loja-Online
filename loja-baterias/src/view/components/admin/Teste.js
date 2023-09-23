const teste = [
  { name: "name", value: "", type: "text", description: "Nome Completo" },
  { name: "password", value: "", type: "password", description: "Senha" },
  { name: "email", value: "", type: "email", description: "E-mail" },
  {
    name: "UserTypeId",
    value: "",
    type: "select",
    description: "Tipo de Usuário",
    referece: "userType",
  },
];

let aux = {};

for (let item of teste) {
  aux[item.name] = item.value || "";
}

console.log(aux);

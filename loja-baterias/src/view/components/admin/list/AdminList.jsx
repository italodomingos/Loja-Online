import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { DataGrid } from "@mui/x-data-grid";
import { useCapitalizeFirstLetter } from "../../../customHooks/utilCustomHook";
import { useUser } from "../../../customHooks/userCustomHook";

export default function AdminList({ rows, columns, reference, searchEvent }) {
  const type = useCapitalizeFirstLetter(reference);
  const { handleDelete } = useUser();

  columns = [
    ...columns,
    {
      field: "actions",
      headerName: "",
      width: 300,
      renderCell: (params) => (
        <div>
          {/* Exemplo com um link <a> */}
          <Button
            variant="outline-primary"
            className="me-3 p-1"
            href={`/admin/user/${params.row.id}`}
          >
            <i className="bi bi-pencil-square"></i>Editar
          </Button>

          {/* Exemplo com um botão <button> */}
          <Button
            variant="danger"
            className="ms-3 p-1"
            onClick={() => handleDelete(params.row.id)}
          >
            Excluir
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between p-3 mt-2">
        <h3>{type}</h3>
        <Button className="bg-primary" href={`/admin/${reference}/create`}>
          <i className="bi bi-plus"></i> Novo {type}
        </Button>
      </div>
      <div className="mx-3 p-5">
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder={"Procurar " + type}
            className=" mr-sm-2"
          />
          <Button variant="primary" type="submit" onClick={searchEvent}>
            Pesquisar
          </Button>
        </Form>
        <div style={{ height: 630, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

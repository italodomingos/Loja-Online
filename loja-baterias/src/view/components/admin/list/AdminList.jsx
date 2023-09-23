import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { DataGrid } from "@mui/x-data-grid";
import { useUser } from "../../../customHooks/userCustomHook";
import Message from "../../message/Message";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InputGroup from "react-bootstrap/InputGroup";
import { useUtil } from "../../../customHooks/utilCustomHook";

export default function AdminList({
  rows,
  columns,
  reference,
  searchEvent,
  setRows,
}) {
  const { handleDelete } = useUser();
  const [message, setMessage] = useState("");
  const [rowsSelection, setRowsSelection] = useState([]);
  const { capitalizeFirstLetter } = useUtil();
  const type = capitalizeFirstLetter(reference);

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
          {/* <Button
            variant="danger"
            className="ms-3 p-1"
            onClick={() => {
              setMessage({ text: "" });
              // handleDelete(params.row.id);
              let newRows = [...rows];
              const index = newRows.findIndex(
                (item) => item.id !== params.row.id
              );
              newRows.splice(index, 1);
              setRows(newRows);
              setMessage({
                text: "Usuário removido com sucesso",
                type: "success",
              });
            }}
          >
            Excluir
          </Button> */}
        </div>
      ),
    },
  ];

  const handleDeleteRows = () => {
    setMessage({ text: "" });

    let newRows = [...rows];
    for (let rowSelected of rowsSelection) {
      const index = newRows.findIndex((item) => item.id !== rowSelected);

      newRows.splice(index, 1);
      setRows(newRows);
      handleDelete(rowSelected);
    }
    setMessage({
      text: "Usuários removidos com sucesso.",
      type: "success",
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between p-3 mt-2">
        <h3>{type}</h3>
        <Button className="bg-primary" href={`/admin/${reference}/create`}>
          <i className="bi bi-plus"></i> Novo {type}
        </Button>
      </div>
      {message && <Message text={message.text} type={message.type} />}
      <div className="mx-3 p-5">
        <Form className="d-flex">
          <InputGroup>
            <InputGroup.Text id="inputGroupPrepend">Pesquisar</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder={"Procurar " + type}
              className=" mr-sm-2"
              name="searchText"
              onChange={searchEvent}
            />
          </InputGroup>
        </Form>
        <div style={{ height: 630, width: "100%" }} className="">
          <DataGrid
            rows={rows}
            columns={columns}
            rowId={(row) => row.id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            onRowSelectionModelChange={(rowsSelected) => {
              setRowsSelection(rowsSelected);
            }}
            className=""
          />
          {rowsSelection.length > 0 && (
            <IconButton onClick={handleDeleteRows} color="primary">
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

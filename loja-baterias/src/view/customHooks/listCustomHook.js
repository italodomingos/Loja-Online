import { useEffect, useState } from "react";
import axios from "axios";

const useListTypes = (name) => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/${name}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const options = response.data.map((value) => {
          return (
            <option key={value.id} value={value.id} name={value.id}>
              {value.description}
            </option>
          );
        });

        const listWithEmptyOption = [
          <option key="empty" value="" name="">
            Selecione uma opção
          </option>,
          ...options,
        ];
        setList(listWithEmptyOption);
      })
      .catch((error) => {
        setMessage({
          text: error.message,
          type: "danger",
        });
      });
  }, [name]);

  return { list, message };
};

export { useListTypes };

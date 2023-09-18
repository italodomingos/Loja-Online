import { useListContext } from "react-admin";

const RenderArray = () => {
  const { data } = useListContext();
  return (
    <ul>
      {data.map((value) =>
        value.description ? (
          <li key={value.description}>
            {value.description + " x" + value.PurchaseItem.quantity}
          </li>
        ) : (
          <li key={value}>{value}</li>
        )
      )}
    </ul>
  );
};

export default RenderArray;

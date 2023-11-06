import React from "react";
import Button from "../UI/Button/Button";

const List = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li key={props.id} onClick={deleteHandler}>
      {props.children}
      <Button onClick={deleteHandler}>Delete Product</Button>
    </li>
  );
};
export default List;

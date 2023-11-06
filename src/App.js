import React from "react";
import AddProduct from "./components/AdminPage/AddProduct";
import ProductList from "./components/AdminPage/Porductslist";
import { Fragment } from "react";
import { useState } from "react";



const App = () => {
  const [orderList, setOrderList] = useState([]);

  const onAdd = (Id,Price,Dish,table) => {
   
    const li = {  expenseamount:Price, discription:Dish, id:Id, category:table};
    localStorage.setItem(Id, JSON.stringify(li));
    setOrderList((prevProducts) => {
      const updatedlist = [...prevProducts];
      updatedlist.push(li);
      return updatedlist;
    });
  };
  const onDelete = (productId) => {
    localStorage.removeItem(productId);
    setOrderList((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      return updatedProducts;
    });
  };

  return (
    <Fragment>
      <AddProduct onAdd={onAdd} />
      <ProductList
        products={orderList}
        onDelete={onDelete}
      />
    </Fragment>
  );
};
export default App;

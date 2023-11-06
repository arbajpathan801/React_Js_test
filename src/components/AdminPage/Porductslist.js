import React from "react";
import List from "./List";
import Card from "../UI/Card/Card";
import classes from "./Productslist.module.css";


const Productslist = (props) => {
  
  return (
    <Card className={classes.products}>
      <ul>
        Table 1
        {props.products.map((product) => {
          if (product.category === "table1"){
            return (
              <List key={product.id} onDelete={props.onDelete} id={product.id}>
                {`${product.expenseamount}=> ${product.category}: ${product.discription}`}
              </List>
            );}
          
        })}
      </ul>
      <ul>
        Table 2
        {props.products.map((product) => {
          if (product.category === "table2") {
            return (
              <List key={product.id} onDelete={props.onDelete} id={product.id}>
                {`${product.expenseamount}=> ${product.category}: ${product.discription}`}
              </List>
            );
          }
        })}
      </ul>
      <ul>
        Table 3
        {props.products.map((product) => {
          if (product.category === "table3") {
            return (
              <List key={product.id} onDelete={props.onDelete} id={product.id}>
                {`${product.expenseamount}=> ${product.category}: ${product.discription}`}
              </List>
            );
          }
       
        })}
      </ul>
    </Card>
  );
};
export default Productslist;

import React,{useRef} from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './AddProduct.module.css'
import { useState } from "react";



const AddProduct=(props) => {

    const orderId=useRef()
    const expenseAmount=useRef()
    const discription=useRef()
    const [table,setTable] =useState('')
    // const [pId,setPId] = useState('')
    // const [sPrice,setSPrice] = useState('')
    // const [pName,setPName] = useState('')

    // const  idHandler=(e) => {
    //     setPId(e.target.value)
    // }
    // const priceHandler= (e) => {
    //     setSPrice(e.target.value);
    // }
    // const nameHandler= (e) => {
    //     setPName(e.target.value);
    // }
    const tableHandler =(e) => {
        setTable(e.target.value)
    }

    const submitHandler= (e) => {
        e.preventDefault();
        const Id=orderId.current.value
        const Price=expenseAmount.current.value;
        const Dish=discription.current.value;
     
        
        props.onAdd(Id,Price,Dish,table)
        orderId.current.value='';
        expenseAmount.current.value='';
        discription.current.value='';
        
    }
   
    return (
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <label htmlFor="uniqueid"> Unique Order ID :</label>
            <input id="uniqueid" type="number" ref={orderId} required/>
            <label htmlFor="amount"> Choose Price : </label>
            <input id="amount" type="number" ref={expenseAmount} required/>
            <label htmlFor="dish"> Choose Dish :</label>
            <input id="dish" type="text" ref={discription} required/>
            <label htmlFor="selection">Choose a Table   :</label>
            <select id="selection" onChange={tableHandler}>
                <option value='table1'>Table 1</option>
                <option value='table2'>Table 2</option>
                <option value='table3'>Table 3</option>
            </select><br/>
            <Button type='submit'>Add To Bill</Button>
        </form>
        </Card>
    );
}

export default AddProduct;
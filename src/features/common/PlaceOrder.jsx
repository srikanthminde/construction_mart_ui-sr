import React from 'react'
import { usePlaceOrderMutation } from '../../services/order.service'
 import { useSelector } from 'react-redux'
 import { Link } from 'react-router-dom'
function PlaceOrder() {
  var [ placeOrderFn]=usePlaceOrderMutation()
   var {cartItems}=useSelector(state=>state.cart)
  function newPlaceOrder(){
    var order = {
      username:window.localStorage.getItem("username"),
      status:[{action:"placed",timestamp:Date.now()}],
      cartItems,
    }
    placeOrderFn(order).then((res)=>{console.log(res)})
    alert("Order Aithundhi marii!!!");
  }
   return (
    <div>
        <h1>Place Order done</h1>
       <Link className='' >Cancel</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn btn-warning'  onClick={newPlaceOrder}> Yes place order</button>
    </div>
  )
}
export default PlaceOrder

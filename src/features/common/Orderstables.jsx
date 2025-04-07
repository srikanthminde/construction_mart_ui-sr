import React from 'react'
import { Link } from 'react-router-dom'


import { useAcceptOrderMutation, useDeleteOrderMutation,useDispatchOrderMutation,useLazyGetAllOrderQuery,useSetOrderDeliveredMutation } from '../../services/order.service'
import { useSelector } from 'react-redux'
function Orderstables({orders}) {
  console.log(orders)
  var {role}=useSelector(state=>state.auth)
  var [deleteOrderFn] =useDeleteOrderMutation()
  var [getAllOrderFn]=useLazyGetAllOrderQuery()
  var [acceptOrderFn]=useAcceptOrderMutation()
  var [dispatchOrderFn]= useDispatchOrderMutation()
  var [deliveredFn]=useSetOrderDeliveredMutation()
  function deleteOrder(order){
    deleteOrderFn(order).then(()=>{
        getAllOrderFn()
    })
  }
    
   function acceptOrder(order){
    var temp =JSON.parse(JSON.stringify(order))
    temp.status.push({
        action:"accepted",
        timestamp:Date.now(),
      
    })
    acceptOrderFn(temp).then(()=>{getAllOrderFn()})
  }
  
  function dispatchOrder(order){
    var temp =JSON.parse(JSON.stringify(order))
    temp.status.push({
        action:"dispatched",
        timestamp:Date.now(),
      
    })
    dispatchOrderFn(temp).then(()=>{getAllOrderFn()})
  }

  function isAccepted(order){
    console.log(order)
    var x = order?.status.find((s)=>{
      if(s.action ==="accepted"){
        return true
      }
    })
    return x
  }
  function isDispatched(order){
    console.log(order)
    var x = order?.status.find((s)=>{
      if(s.action==="dispatched"){
        return true
      }
    })
    return x
  }

  function isDelivered(order){
    console.log(order)
    var x = order?.status.find((s)=>{
        if(s.action==='delivered'){
            return true
        }
    })
    return x
}
  function delivered(order){
    var temp =JSON.parse(JSON.stringify(order))
    temp.status.push({
        action:"delivered",
        timestamp:Date.now()
      
    })
deliveredFn(temp).then(()=>{getAllOrderFn()})
  }
  
  return (
    <div  >
        <h1 className='text-center'>  ORDER LIST</h1><br />
        <table class="table table-warning table-striped  table table-bordered text-center" >
    
            <thead>
                <tr>
                  <th>Order Id</th>
                  <th>username</th>
                  <th>no off items</th>
                  <th>viewnore</th>
                  <th>Options</th>
                </tr>
            </thead>
            <tbody>
            {
                orders?.map((order)=>{
                return(
                    <tr>
                        <td>{order.id}</td>
                        <td>{order.username}</td>
                        <td>{order.cartItems.length}</td>
                       <td><Link className='btn btn-success' to="">view More.....</Link></td>
                       <td>
                                <b>{!isAccepted(order) && "Waiting for Approval"}</b>&nbsp;&nbsp;
                                <b>{isAccepted(order) && "Accepted"}</b>&nbsp;&nbsp;
                                <b>{isDispatched(order) && "Dispatched"}</b>&nbsp;&nbsp;
                                <b>{isDelivered(order) && "Delivered"}</b>&nbsp;&nbsp;
                        
                                {role ==='manager' && <>
                                    {!isAccepted(order) && (<>
                                        <button className='btn btn-danger mx-2 px-2' onClick={()=>{deleteOrder(order)}}>Delete</button>
                                        <button className='btn btn-success mx-2 px-2' onClick={()=>{acceptOrder(order)}}>Accept</button>
                                    </>)}
                                    {
                                          isAccepted(order) && !isDispatched(order) && <button className='btn btn-info mx-2 px-2' onClick={()=>{dispatchOrder(order)}}>Dispatch</button>
                                    }
                                    {
                                        isDispatched(order) && !isDelivered(order) && <button className='btn btn-secondary mx-2 px-2' onClick={()=>{delivered(order)}}>Delivered</button>
                                    }
                                </>}
                      
                       </td>
                    </tr>
                )
            })
        }
            </tbody>
        </table>
       
    </div>
  )
}
export default Orderstables



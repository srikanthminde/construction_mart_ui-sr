import React, { useEffect } from 'react'
import { useGetAllOrderQuery,useLazyGetAllOrderQuery } from '../../services/order.service'


import Orderstables from './Orderstables'

function Order() {
    var{data:orders}=useGetAllOrderQuery ()
   var [getAllOrderFn] = useLazyGetAllOrderQuery()
    console.log("orders::",orders)
    useEffect(()=>{
      getAllOrderFn()
    },[])
  return (
    <div className='border border-2 border-dark m-2 p-2'>
        <h4>Order</h4>
       <Orderstables  orders={orders}></Orderstables>
      
    </div>
  )
}

export default Order
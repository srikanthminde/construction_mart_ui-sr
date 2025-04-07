import React from 'react'

import Orderstables from '../common/Orderstables'
import {useGetOrderByUserNameQuery } from '../../services/order.service'
import { useSelector } from 'react-redux'
 
function AgentDashboard() {
  var {username} = useSelector(state=>state.auth)
 // var {data:orders}=useGetOrderByUserNameQuery(username)
  var {isLoading,data:orders}=useGetOrderByUserNameQuery(username);
  return (
    <div>
        <h1>USERS <img src="https://cdn4.iconfinder.com/data/icons/user-54/100/user-05-512.png" width="100px" alt="" /></h1> 
        <Orderstables orders={orders}></Orderstables>
    </div>
  )
}

export default AgentDashboard
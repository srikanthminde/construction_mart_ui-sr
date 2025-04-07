import React from 'react'
import { useSelector } from 'react-redux'
import AgentDashboard from './AgentDashboard'
import ManagerDashboard from './ManagerDashboard'
function Dashbord() {
  var {role}=useSelector(state=>state.auth)
    return (
        <div>
          <h1></h1>
          {role==='agent' && <AgentDashboard></AgentDashboard>}
            {role==='manager' && <ManagerDashboard></ManagerDashboard>}
        </div>
    )
}

export default Dashbord
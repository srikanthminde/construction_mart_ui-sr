import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function ManagerDashboard() {
  return (
    <div style={{}}>
      
        <h1>Manager   Dashboard <img src="https://static.vecteezy.com/system/resources/previews/000/546/107/original/businessman-in-suit-head-vector-icon.jpg"  width="110px"/></h1>&nbsp;&nbsp;
        <Link className='btn btn---bs-tertiary-color-rgb' to="AddProducts">Add Product</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='btn btn---bs-danger-bg-subtle' to="viewOrder" >view Order</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default ManagerDashboard

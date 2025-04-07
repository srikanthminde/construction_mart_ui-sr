import React from 'react'
import { Outlet } from 'react-router-dom'

function WelcomePage() {
  return (
    <div>
        <h1>Welcome Page</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default WelcomePage
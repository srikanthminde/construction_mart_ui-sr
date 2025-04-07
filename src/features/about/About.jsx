import React from 'react'
import { Outlet } from 'react-router-dom'

// import { } from 'react-router-dom'
// import { usegetAllProductQuery } from '../../services/product.services'
// import { useGetAllProductsQuery } from '../../services/product.services'

function About() {
    // var {isLoding,data}=useGetAllProductsQuery()
    // console.log(data)
  return (
    <div  >
        {/* <h1></h1> */}
        <div >
         
          <h1  class="text-center"> Who Are We?</h1>
         
       
          {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button> */}
                <p class="text-break fw-bold font-monospace"  >
                Infra.Market is a one-stop solution for all your construction material requirements. With world class manufacturing units and Innovation Center, we revolutionize construction products from foundation to finish. We provide a variety of building materials and lifestyle products that elevate interiors through our robust B2B, retail and B2C network . We are one of Asia's fastest-growing construction solution companies transforming the ecosystem through technology.

                </p>
             
        </div>
        <Outlet></Outlet>

      

    </div>
  )
}

export default About

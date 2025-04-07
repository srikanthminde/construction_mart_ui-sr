// import React from 'react'
// import { useGetAllProductsQuery } from '../../../services/product.services'
// import { Link } from 'react-router-dom'
// function Products() {
// var  {isLoading,data}=useGetAllProductsQuery()
//   return (
//     <div style={{marginRight:"1000px", width:"1505px",height:"680px", 
//       }}
//      className='p-2 m-2'>
//         {
//             isLoading===false && (data.map((product)=>{
//                 return<li style={{listStyle:"none"}} className="" >
//                   <button className='btn btn-'> <Link className="link-dark link-offset-2 text-danger text-decoration-none" to = {`/productDeltails/${product.id}`}>   &nbsp;&nbsp;{product.name}</Link></button>
//                 </li>
//             }))
//         }
//     </div>
//   )
// }
// export default Products

import React from 'react';
import { useGetAllProductsQuery } from '../../../services/product.services';
import { Link } from 'react-router-dom';

function Products() {
  const { isLoading, data } = useGetAllProductsQuery();

  return (
    <div className="p-2 m-2">
      {isLoading ? (
        <p>Loading products...</p> 
      ) : (
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '35px', 
            // justifyContent: 'center' // ✅ Centers all items
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              style={{ 
                width: '350px', 
                border: '1px solid #ddd', 
                borderRadius: '10px', 
                padding: '10px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                backgroundColor: '#fff',
                textAlign: 'center' // ✅ Centers button inside the card
              }}
              className="card"
            >
              {/* Product Image */}
              <img
                src={product.imgUrl}   
                alt={product.name}  
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '4px',padding:"5px" }}
              />
              <div style={{ padding: '10px 0' }}>
                {/* Centered Outlined Button */}
                <Link to={`/productDeltails/${product.id}`}>
                  <button 
                    className="btn btn-outline-success" // ✅ Outlined button style
                    style={{ width: '100%', padding: '10px', fontSize: '16px', fontWeight: 'bold' }}
                  >
                    {product.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;

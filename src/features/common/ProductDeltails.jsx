import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductDetailsByIdQuery } from "../../services/product.services";
import { useDispatch, useSelector } from "react-redux"; 
import { addToCart } from "./cartSlice";
import { whishlistSaved } from "./wishlistSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const { cartItems } = useSelector((state) => state.cart);
  const { isLoading, data: product } = useGetProductDetailsByIdQuery(params.id);

  function isInCart() {
    return cartItems.find((item) => item.id === +params.id);
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      {!isLoading && (
        <div 
          className="p-4 bg-white shadow rounded d-flex flex-column flex-md-row align-items-center gap-4"
          style={{ maxWidth: "800px", width: "90%" }}
        >
          {/* Product Image */}
          <img 
            className="border rounded" 
            src={product.imgUrl} 
            style={{ height: "300px", width: "350px", objectFit: "cover" }} 
            alt={product.name} 
          />

          {/* Product Details */}
          <div>
            <h1 className="text-primary text-center">{product.name}</h1>
            <h4 className="text-muted">
              <i className="bi bi-currency-rupee"></i> {product.price}
            </h4>
            <h5 className="text-secondary">Company: {product.company}</h5>
            <h5 className="text-secondary">Category: {product.category}</h5>

            <div className="mt-4 d-flex flex-column gap-2">
              {/* Add to Cart Button */}
              {!isInCart() ? (
                <button 
                  onClick={() => dispatch(addToCart({ ...product, count: 1 }))}
                  className="btn btn-outline-warning w-100"
                >
                  <i className="bi bi-cart3"></i> Add to Cart
                </button>
              ) : (
                <Link to="/cart" className="btn btn-outline-warning w-100">
                  <i className="bi bi-cart3"></i> Go To Cart
                </Link>
              )}

              {/* Wishlist Button */}
              <Link 
                onClick={() => dispatch(whishlistSaved({ ...product, count: 1 }))}
                className="btn btn-outline-danger w-100"
                to="/wishlist"
              >
                <i className="bi bi-heart-fill"></i> Add to Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

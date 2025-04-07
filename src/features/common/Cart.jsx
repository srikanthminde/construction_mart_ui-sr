import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incItemCount, decItemCount, removeFromCart, setCartItems } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      dispatch(setCartItems(storedCartItems));
    }
  }, [dispatch]);

  function placeOrder() {
    navigate(isLoggedIn ? "/placeOrder" : "/login");
  }

  function handleIncrease(item) {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    dispatch(incItemCount(item.id));
  }

  function handleDecrease(item) {
    if (item.count === 1) {
      handleRemove(item.id);
    } else {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      dispatch(decItemCount(item.id));
    }
  }

  function handleRemove(itemId) {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    dispatch(removeFromCart(itemId));
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4">
        Your Shopping Cart <i className="bi bi-cart4"></i>
      </h2>

      <div className="row">
        {/* Cart Items Table */}
        <div className="col-md-7">
          <div className="table-responsive shadow p-3 rounded">
            <table className="table table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th className="text-center">Product Name</th>
                  <th className="text-center">Price (₹)</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="align-middle">
                    <td className="text-center fw-bold">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-sm btn-outline-danger mx-1"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        <span className="px-3">{item.count}</span>
                        <button
                          className="btn btn-sm btn-outline-success mx-1"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>   
            </table>
          </div>
        </div>

        {/* Price Details Section */}
        <div className="col-md-5">
          <div className="card shadow rounded p-4">
            <h4 className="text-center text-success fw-bold">
              Price Details <i className="bi bi-bag-check-fill"></i>
            </h4>
            <table className="table table-borderless mt-3">
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-bold">{item.name}</td>
                    <td className="text-end">₹{item.price * item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-top pt-3">
              <h3 className="fw-bold text-center">
                Total: ₹{cartItems.reduce((total, item) => total + item.price * item.count, 0)}
              </h3>
              <p className="text-muted text-center">You will save ₹1,100 on this order</p>
            </div>
            <button className="btn btn-warning w-100 fw-bold" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

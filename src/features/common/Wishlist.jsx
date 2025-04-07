import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeFromSaved } from "./wishlistSlice";
import { addToCart, setCartItems, incItemCount } from "./cartSlice"; 
import { useEffect } from "react";

function Wishlist() {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      dispatch(setCartItems(storedWishlist));
    }
  }, [dispatch]);

  function handleAddToCart(item) {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // If item exists, increase the count
      dispatch(incItemCount(item.id));
    } else {
      // If item doesn't exist, add it with count: 1
      dispatch(addToCart({ ...item, count: 1 }));
    }

    // Remove from wishlist after adding to cart
    dispatch(removeFromSaved(item.id));
  }

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-4 text-danger fw-bold">Your Wishlist</h2>
      <div className="row justify-content-center">
        {wishlistItems?.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div 
              className="shadow-lg p-4 rounded position-relative" 
              style={{
                background: "linear-gradient(to bottom right, #6dd5ed, #2193b0)",
                color: "#fff",
                borderRadius: "15px",
                transition: "transform 0.3s ease-in-out"
              }}
            >
              <img 
                className="shadow-sm rounded w-100 mb-3"
                src={item.imgUrl}
                alt={item.name}
                style={{ height: "230px", objectFit: "cover", borderRadius: "10px" }}
              />
              <h5 className="fw-bold">{item.name}</h5>
              <p className="fw-light">
                <strong>Price: <i className="bi bi-currency-rupee"></i>{item.price}</strong>
              </p>
              <h6>Company: {item.company}</h6>
              <h6>Category: {item.category}</h6>
              
              <div className="d-flex justify-content-between mt-3">
                <button 
                  onClick={() => handleAddToCart(item)} 
                  className="btn btn-warning fw-bold shadow-sm"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => dispatch(removeFromSaved(item.id))} 
                  className="btn btn-danger fw-bold shadow-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;

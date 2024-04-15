import React from 'react'
import { useCart } from '../../context/Cart'
import { toast } from 'react-toastify';

const CartPage = () => {
  const [cart, setCart] = useCart();
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart]
      let index = myCart.findIndex(item => item._id === pid)
      myCart.splice(index, 1)
      setCart(myCart)
      localStorage.setItem("cart",JSON.stringify(myCart))
      toast.success("Item removed")
    } catch (error) {
      console.log(error);
    }
  }
  console.log(cart);
  const handleDecrement = (item) => {
    if(item.product_qty>1){
      let updatedItem = { ...item, product_qty: item.product_qty - 1 }
      setCart((prevCart) => prevCart.map((cartItem) =>
        cartItem._id === item._id ? updatedItem : cartItem
      ));
      let updatedCart = JSON.stringify(
        cart.map((cartItem) =>
          cartItem._id === item._id ? updatedItem : cartItem
        )
      );
      localStorage.setItem("cart", updatedCart);
    }
    else{
      removeCartItem(item._id)
    }
    // setCart(cart =>
    //   cart.map((item) =>
    //     cart_id === item._id ? { ...item, product_qty: item.product_qty - 1 } : item
    //   )
    // );

  }
  const handleIncrement = (item) => {
    if (item.product_qty < item.quantity) {
      let updatedItem = { ...item, product_qty: item.product_qty + 1 }
      setCart((prevCart) => prevCart.map((cartItem) =>
        cartItem._id === item._id ? updatedItem : cartItem
      ));
      let updatedCart = JSON.stringify(
        cart.map((cartItem) =>
          cartItem._id === item._id ? updatedItem : cartItem
        )
      );
      localStorage.setItem("cart", updatedCart);
    }
    else {
      toast.error("No more item inventry")
    }

  }

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f1f3f6", height: "100vh" }}>
      <div className='container'>
        <h1 className="mb-3 text-center">CartPage</h1>
        {/* {JSON.stringify(cart)} */}
        <h5>{cart.length}</h5>
        <div className="row mb-3 g-4">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div className="card border-0 shadow mb-3">
                <div className="card-body">
                  {/* {item.picture} */}
                  <div className="row p-3">
                    <div className="col-lg-2 d-flex justify-content-center">
                      <div>
                        <div>
                          <img style={{ maxWidth: 100, maxHeight: 100 }} src={item?.productimage}  alt='img'/>
                        </div>
                        <div className='d-flex justify-content-center'>
                          <div class="btn-group mt-3" role="group" aria-label="Basic example">
                            <button type="button" onClick={() => handleDecrement(item)} class="btn btn-sm rounded-5 shadow-sm btn-outline-secondary px-2">-</button>
                            <button type="button" class="btn btn-sm rounded-0 shadow-sm btn-outline-secondary mx-2" disabled>{item.product_qty}</button>
                            <button type="button" onClick={() => handleIncrement(item)} class="btn btn-sm rounded-5 shadow-sm btn-outline-secondary px-2">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 ">
                      <div class="">
                        <h6 class="">{item?.title.substring(0, 30)}...
                        </h6>
                        <h6>₹{item?.prize}<span className='text-success'>70%Off</span></h6>
                        <div class="">
                          <button type="button" class="btn btn-sm btn-danger" onClick={() => removeCartItem(item._id)}>Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <p className="fs-6 text-center">Delivery by Thu Feb 22 | ₹40Free</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
          <div className="col-lg-4">
            <div className="card shadow mb-3 border-0">
              <div className="card-body">
                <p className="text-center">Price Details</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between">Price <span>₹1000000</span></li>
                  <li class="list-group-item  d-flex justify-content-between">Discount <span className='text-success'>-₹1000</span></li>
                  <li class="list-group-item  d-flex justify-content-between">By more & save more <span className='text-success'>-₹400</span></li>
                  <li class="list-group-item  d-flex justify-content-between">Delivery Charges <span className='text-success'><strike className="text-dark">₹200</strike> Free</span></li>
                  <li class="list-group-item  d-flex justify-content-between">Total Amount <span>₹1000000</span></li>
                </ul>
                <p className="text-success">You Will Save ₹500 on this order</p>
                <div className='d-grid'>
                  <button className='btn btn-warning'>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage

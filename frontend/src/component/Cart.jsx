// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Payment from "./Payment";

// const Cart = ({ setCartlength }) => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const [paymentvisible,setpaymentvisible]=useState(false)

//   const handlepayment=()=>{
//     setpaymentvisible(true)
//   }

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/cart");
//       setCart(response.data);
//       const totalAmount = response.data.reduce(
//         (acc, item) => acc + item.productprice,
//         0
//       );
//       setTotal(totalAmount);
//       setCartlength(response.data.length);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [cart]);

//   const handleRemove = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/deletecart/${id}`);
//       fetchCart();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link to={"/dashboard"} className="navbar-brand fw-bold">
//             DashBoard
//           </Link>
//           <div className="">
//             <h6 className="fw-bold">Total: ${total.toFixed(2)}</h6>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-4">
//         <div className="d-flex justify-content-between">
//           <h3 className="fw-bold">Cart</h3>
//           <button className="btn btn-success" onClick={handlepayment} >Proceed To Pay</button>
//         </div>

//         <div className="container d-flex flex-fill flex-wrap">
//           <div className="row gx-5">
//             <div className="col">
//               {cart.length > 0 ? (
//                 cart.map((value) => (
//                   <>
//                     <div key={value.id} className="mt-3 d-flex">
//                       <div>
//                         <img
//                           src={value.productimage}
//                           alt={value.productname}
//                           className="img-fluid"
//                           style={{ maxHeight: "150px", objectFit: "cover" }}
//                         />
//                       </div>
//                       <div className="p-4">
//                         <h4>{value.productname}</h4>
//                         <h5>${value.productprice.toFixed(2)}</h5>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => handleRemove(value.id)}
//                         >
//                           <small>Remove</small>
//                         </button>
//                       </div>
//                     </div>
//                     <hr />
//                   </>
//                 ))
//               ) : (
//                 <div>
//                   <p>Cart is empty</p>
//                 </div>
//               )}
//             </div>
//             {paymentvisible && (
//                 <div className="col ">
//                   <Payment cart={cart} total={total}/>
//                 </div>


//             )}
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "./Payment";

const Cart = ({ setCartlength }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentVisible, setPaymentVisible] = useState(false);

  const handlePayment = () => {
    setPaymentVisible(true);
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
      setCart(response.data);
      const totalAmount = response.data.reduce(
        (acc, item) => acc + item.productprice,
        0
      );
      setTotal(totalAmount);
      setCartlength(response.data.length);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [cart]); // Empty array to only call fetchCart once on mount

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletecart/${id}`);
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/dashboard"} className="navbar-brand fw-bold">
            DashBoard
          </Link>
          <div className="">
            <h6 className="fw-bold">Total: ${total.toFixed(2)}</h6>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="fw-bold">Cart</h3>
          <button className="btn btn-success" onClick={handlePayment}>
            Proceed To Pay
          </button>
        </div>

        <div className="row">
          {/* Cart Items Column */}
          <div className="col-12 col-md-6">
            {cart.length > 0 ? (
              cart.map((value) => (
                <div key={value.id} className="mt-3 d-flex">
                  <div className="me-3">
                    <img
                      src={value.productimage}
                      alt={value.productname}
                      className="img-fluid"
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-4">
                    <h5>{value.productname}</h5>
                    <h5>${value.productprice.toFixed(2)}</h5>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(value.id)}
                    >
                      <small>Remove</small>
                    </button>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <div>
                <p>Cart is empty</p>
              </div>
            )}
          </div>

          {/* Payment Section (Only shows when paymentVisible is true) */}
          <div className="col-12 col-md-6">
            {paymentVisible && (
              <Payment cart={cart} total={total} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

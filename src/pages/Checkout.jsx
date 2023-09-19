import { useEffect, useState } from "react";
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart, quantityDecrement, quantityIncrement } from "../redux/cartSlice";


const Checkout = () => {
const dispatch = useDispatch()
const productsQuantity = useSelector((state) => state.amazonReducer.productsNumber);
const products = useSelector((state) => state.amazonReducer.products);
const [totalPrice, setTotalPrice] = useState("")
useEffect(() => {
    let Total= 0;
    products.map((item) =>{
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2))
    })
  },[products])
  return (
    <div className="h-full bg-amazonClone-background ">
      {products.length > 0 ? (
        <div className="min-w-3xl lgl:min-w-[1000px] lgl:max-w-[1500px] m-auto  pt-8">
          <div className=" grid grid-cols-8 gap-1 lgl:gap-10">
            {/* products  */}
            <div className="col-span-6 bg-white mb-20">
              <div className="text-2xl xl:text-3xl m-4 ">Shopping Cart</div>
              {products.map((item) => (
                <div key={item.id}>
                  <div className="grid grid-cols-12 divide-y  divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <img className="p-4 m-auto " src={item.image} />
                      </div>
                      <div className="col-span-6 ml-2">
                        <div className="font-medium text-black mt-2">
                          <div className="mb-1 ">
                            <div className="text-xl xl:text-2xl font-medium m-1 mt-3 mb-3">
                              {item.title}
                            </div>
                            <div className="text-sm xl:text-base m-1 mb-3">
                              {item.description.substring(0, 200)}
                            </div>
                            <div className="text-sm xl:text-base m-1">
                              <span className="text-blue-500 mb-2">
                                Unit Price: ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 text-center w-20 m-2">
                          <div
                            onClick={() => dispatch(quantityDecrement(item.id))}
                            className="text-xl xl:2xl bg-gray-400 rounded cursor-pointer "
                          >
                            -
                          </div>
                          <div className="text-lg xl:xl bg-gray-200 ">
                            {item.quantity}
                          </div>
                          <div
                            onClick={() => dispatch(quantityIncrement(item.id))}
                            className="text-xl xl:2xl bg-gray-400 rounded cursor-pointer"
                          >
                            +
                          </div>
                        </div>
                        <div>
                          <button
                            className="text-sm xl:text-base font-semibold rounded text-red-500 hover:bg-red-500 hover:text-white p-1  ml-2 mt-2 mb-1"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text:xl mt-2 mr-4 font-semibold">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              ;
              <div className="ml-6">
                <button
                  onClick={() => dispatch(resetCart())}
                  className="text-lg xl:text-xl m-4 text-white bg-red-500 hover:bg-red-400 active:bg-red-600 rounded p-2 "
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* checkout  */}
            <div className="col-span-2 bg-white rounded h-80 p-1
          
            mdl:p-7">
              <div className="flex gap-2 text-xs xl:text-sm text-green-800 mb-2">
                <CheckCircleIcon className="h-11" />
                <span>
                  Your Order Qualifies for
                  <span className="font-bold"> FREE DELIVERY</span>. Delivery
                  Details
                </span>
              </div>
              <div className=" text-base xl:text-lg  mb-4 ">
                <span className="">({productsQuantity} items):</span>
                <span className="font-semibold ">Subtotal: ${totalPrice}</span>
              </div>
              <button className="w-full bg-yellow-400 border:yellow-500 hover:bg-yellow-500 active:bg-yellow-600 font-medium rounded-md py-1.5 tracking-wide">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mdl:flex items-center justify-center gap-4 py-10">
          <div>
            <img
              className="w-80 rounded-lg p-4 py-10 m-auto"
              src={"../images/emptyCart.png"}
            />
          </div>
          <div className=" flex justify-center text-center">
            <div className="w-96 p-4 bg-white  rounded-md shadow-lg flex flex-col items-center">
              <h1 className=" text:xl font-bold text-center mb-1">
                Your Cart feels lonely.
              </h1>
              <p className="text:sm xl:text-base text-center">
                Your Shopping Cart lives to Serve . Give it purpose - Fill it
                with books, electronics, videos, etc. and make it happy.
              </p>
              <Link to={"/"}>
                <button className="text:lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700  px-8 py-2 font-semibold  mt-6 rounded-md">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;


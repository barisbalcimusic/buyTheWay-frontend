import React from "react";
// REDUX
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../features/cart/cartSlice";

const Counter = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[25vw] grid grid-cols-3 border">
      <button
        className="h-[8vw] flex justify-center items-center text-[6vw] bg-[#E2E2E2]"
        onClick={() => dispatch(decrementQuantity(item.item.id))}>
        -
      </button>
      <p className=" h-[8vw] flex justify-center items-center text-[5vw]">
        {item.quantity}
      </p>
      <button
        className="h-[8vw] flex justify-center items-center text-[6vw] bg-[#E2E2E2]"
        onClick={() => dispatch(incrementQuantity(item.item.id))}>
        +
      </button>
    </div>
  );
};

export default Counter;

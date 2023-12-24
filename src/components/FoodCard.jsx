import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineAlignRight, AiOutlineCheck } from "react-icons/ai";
import { BiSolidCartAdd } from "react-icons/bi";

const FoodCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(item.id);
    setAddedItem(true);

    setTimeout(() => {
      setAddedItem(false);
    }, 2500);
  };

  const handleFoodClick = () => {
    navigate(`/menu/${item.id}`);
  };

  return (
    <div
      onClick={handleFoodClick}
      className="cursor-pointer rounded-2xl shadow-blue-200 hover:shadow-2xl hover:scale-105 duration-500 shadow-lg"
    >
      {/* food container */}
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="w-full md:w-101 h-full md:h-102 object-cover rounded-lg"
        />
      </div>
      {/* Details of Food, Price and Cart */}
      <div className="flex">
        {/* Laptop View */}
        <div className="  pb-2 pt-2 flex-col gap-2 w-full items-start object-cover rounded-lg">
          <h2 className="md:w-101 lg:text-xl font-bold  whitespace-nowrap text-center">
            {item.name}
          </h2>
          <div className="flex-none">
            {/* <button
              onClick={handleAddToCart}
              className="border-none bg-blue-400 rounded p-2 md:p-4 hover:bg-blue-500 rounded-full px-5 relative items-center justify-center"
            >
              <BiSolidCartAdd size={25} className="mr-1" />
            </button> */}
          </div>
        </div>

        {/* Mobile View
        <div className="sm:hidden pb-2 pt-2 flex-col gap-2 w-full items-start object-cover rounded-lg">
          <h2 className="w-full font-bold whitespace-nowrap text-center">
            {item.name}
          </h2>
          Additional mobile-specific elements
        </div> */}

        {/* <div className="gap-2 items-start flex px-5 pb-3 pt-3 flex-col w-full object-cover rounded-lg"></div>

        {addedItem && (
          <div
            className={`fixed bottom-0 left-0 right-0 bg-green-500 rounded flex justify-center items-center gap-3 text-white p-4 transform transition-transform duration-300 ease-in-out translate-y-full`}
          >
            <h1>Added to Cart</h1> <AiOutlineCheck size={24} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FoodCard;

import React from "react";
import { food } from "../data/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";

//To show each category of the different categories
function Category() {
  const [category, setCategory] = useState([]);
  function capitalizeFirstLetter(word) {
    if (typeof word !== 'string' || word.length === 0) {
      return word; // Return the input as is if it's not a string or an empty string
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  let params = useParams();
  const [foods, setFoods] = useState(food);
  var captial= capitalizeFirstLetter(category);
  useEffect(() => {
    window.scrollTo(0, 0);
    setCategory(params.category);
    setFoods(
      food.filter((item) => {
        return item.category === params.category;
      })
    );
  }, [params.category]);

  return (
    <div className="container relative mt-24 lg:mt-6 mx-auto p-5 ">
      <div className=" lg:mx-5 lg:mt-6">
        {/*Header*/}
        <h1 className="font-bold text-2xl lg:text-3xl p-5 text-left">
          Category: <span className="text-blue-500">{captial}</span>
        </h1>
        <hr />
        {/* Display category */}
        {foods.length > 0 ? (
          <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 lg:m-5 lg:p-8 gap-6 bg-transparent rounded-2xl">
            {foods.map((item, index) => (
              <FoodCard key={index} item={item} />
            ))}
          </div>
        ) : (
          <p className="m-4 p-5 ">
            No result found for <b>"{category}" </b>{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default Category;

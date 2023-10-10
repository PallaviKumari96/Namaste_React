/** @format */
import RestroCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let listOfRestaurents1 = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "428",
            name: "Biryani Pot",
            cloudinaryImageId: "stcwjsd9zpxnbi8nnq8t",
            locality: "Maruti Nagar",
            areaName: "Btm Layout",
            costForTwo: "₹500 for two",
            cuisines: ["North Indian", "Biryani"],
            avgRating: 3.9,
          },
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "42",
            name: "Biryani Pot",
            cloudinaryImageId: "stcwjsd9zpxnbi8nnq8t",
            locality: "Maruti Nagar",
            areaName: "Btm Layout",
            costForTwo: "₹500 for two",
            cuisines: ["North Indian", "Biryani"],
            avgRating: 4.5,
          },
        },
      },
    },
  ];
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            filteredRestros = listOfRestaurents.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurents(filteredRestros);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurents.map((restro) => (
          <RestroCard key={restro.card.card.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;

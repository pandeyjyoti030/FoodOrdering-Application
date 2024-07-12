import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import { restaurantlist } from '../config'
import Shimmer from './Shimmer';
import search from '../assets/search.svg'
import { Link } from 'react-router-dom'

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // const searchText = "Search for restaurant";

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  useEffect(() => {

    getRestaurants();
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();

    // console.log("json", json);
    // console.log("carddata",json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("restaurants", restaurants)
  }

  {/* Conditional REndering
  if restaurant is empty => shimmer UI
  else => restaurant cards
*/}

  // Early retrun
  // if (!restaurants) return null;

  // if (filteredRestaurants?.length == 0) return <h1>No restaurant match!!</h1>

  return (restaurants?.length == 0) ? (<Shimmer />) : (
    <>
      <div className=' flex justify-center gap-10'>
        <input
          type='text'
          className='search-input'
          placeholder='Search for restaurant'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />

        <button className='flex items-center gap-2'
          onClick={() => {
            const data = filterData(searchText, restaurants);
            // console.log("data", data)
            setFilteredRestaurants(data);
          }}
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> */}
          <img className='h-3' src={search} alt="" />
          Search
        </button>
      </div>

      <div className='flex flex-wrap p-8 justify-center align-center gap-10'
      >

        {/* logic for NO restaurant found */}
        {
          filteredRestaurants.map((restaurant) => {
            // console.log("restaurant:", restaurant)
            return (
              <Link to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}>
              <Restaurant {...restaurant.info} />
              </Link>
            )
          })
        }

      </div>
    </>
  )
}

export default Body
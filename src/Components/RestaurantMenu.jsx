import React, { useEffect, useState } from 'react'
import  { useParams } from 'react-router-dom'
import {img_url} from '../config'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const { id } = useParams();

    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, [])
    
    async function getRestaurantInfo() {
        let resid = id;
        // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=644866&catalog_qa=undefined&submitAction=E`)
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();

        console.log("menujson", json);
        // setrestaurantDetails(json?.data);
        setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
        setMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    console.log("restaurantDetails", restaurantDetails);
    console.log("menuItems", menuItems);


  return (!restaurantDetails) ? <Shimmer /> :(
    <div>

    <div className=' flex flex-col justify-center items-center'>
        {/* <h1 className='text-2xl font-bold'>Restaurant id: {id}</h1> */}
        <img className='w-1/3' src={img_url + restaurantDetails?.cloudinaryImageId} />
        <h2 className='text-xl font-medium'>{restaurantDetails?.name}</h2>
        <h3 className='text-l font-medium'>{restaurantDetails?.locality + (" ")+ restaurantDetails.areaName}</h3>
        <h3 className='text-m font-medium'>{restaurantDetails?.avgRating} stars</h3>
        <h3 className='text-m font-medium'>{restaurantDetails?.costForTwoMessage}</h3>
    </div>

    <div className='flex flex-wrap p-8 justify-center align-center gap-10'>
    <div className="card">
        {menuItems.map((item) => (
        <div key={item.card.info.id}>
            <img src={img_url + item?.card?.info?.imageId} />
            <h1 className='text-2xl font-bold'>{item?.card?.info?.name}</h1>
            <h3>{item?.card?.info?.description}</h3>
            <h3>{item?.card?.info?.price}</h3>
        </div>
        ))}
    </div>
    </div>
    
    </div>
  )
}

export default RestaurantMenu
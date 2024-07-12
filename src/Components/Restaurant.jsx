import React from 'react'
import { img_url } from '../config'


const Restaurant = ({
  name , cuisines, costForTwo, cloudinaryImageId
}) => {
  let data = cuisines.join(", ");
  let restaurant = name;
  return (
    <div className='card'>
        <img src={img_url + cloudinaryImageId}/>
        {/* <h2 className='text-xl	font-medium	'	 title={restaurant}>{restaurant.slice(0, 20)}...</h2> */}
        <h2 className='text-xl	font-medium	overflow-hidden text-ellipsis whitespace-nowrap'>{name}</h2>
        <h3 className='text-base font-normal'	 title={data}>{data.slice(0, 30)}...</h3>
        <h4 className='text-sm'>{costForTwo}</h4>
    </div>
  )
}

export default Restaurant

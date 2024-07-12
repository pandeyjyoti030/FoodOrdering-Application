import { useState } from 'react'
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import '../App.css'
import NavBar from './NavBar'
// import Body from './Body'
import Restaurant from './Restaurant'
import { restaurantlist } from '../config'
import Body from './Body'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import '../index.css'
import About from './About'
import Error from './Error';
import Contact from './Contact';
import RestaurantMenu from './RestaurantMenu';



function App() {
  const [count, setCount] = useState(0)
  // console.log("restaurantlist",restaurantlist)
  return (
    <div>
      <NavBar />

      {/* <div className='restaurants'>
        {
          restaurantlist.map((restaurant)=>{
            return (
              <Restaurant {...restaurant.info} key={restaurant.info.id}/>
            )
          })
        }
        
      <Restaurant {...restaurantlist[0].info}/>
      <Restaurant {...restaurantlist[1].info}/>
      <Restaurant {...restaurantlist[2].info}/>
      <Restaurant {...restaurantlist[3].info}/>
      <Restaurant {...restaurantlist[4].info}/>

      <Restaurant restaurant = {restaurantlist[0]}/>
      <Restaurant restaurant = {restaurantlist[1]}/>
      <Restaurant restaurant = {restaurantlist[2]}/>
      <Restaurant restaurant = {restaurantlist[3]}/>
      <Restaurant restaurant = {restaurantlist[4]}/>
      </div> */}

      <div>
        <Outlet />
        {/* <Body/> */}
      </div>
    </div>
  )
}
export default App


const appRouter = createBrowserRouter([
  //List of paths
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        //id we are getting from useParams
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
])

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
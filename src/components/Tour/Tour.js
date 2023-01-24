import React from 'react'
import TourSlider from './TourSlider'
import BookingSearch from './BookingSearch'
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import BookHotel from './BookHotel'
import BookFlight from './BookFlight'
import BookCar from './BookCar'

const Tour = () => {
  return (
    <div>

    <TourSlider/>
    <BookingSearch/>
    <Outlet/>



 
 
    </div>
  )
}

export default Tour

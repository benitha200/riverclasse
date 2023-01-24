import React from 'react'
import {Link , Outlet} from 'react-router-dom'


const BookingSearch = () => {
  return (
    <div>
      <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{'padding': '35px'}}>
        <div className="container">
          <div className="row g-2">
          <div className="col-md-4">
          <Link to="/Tour/" className="btn btn-dark border-0 w-100 py-3">Book Flight</Link>
            </div>
            <div className="col-md-4">
            <Link to="/Tour/BookHotel" className="btn btn-dark border-0 w-100 py-3">Book Hotel</Link>
            </div>
            <div className="col-md-4">
            <Link to="/Tour/BookCar" className="btn btn-dark border-0 w-100 py-3">Book Car</Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default BookingSearch

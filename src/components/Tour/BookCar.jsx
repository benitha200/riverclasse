import React from 'react'
import './Book.css'

const BookCar = () => {
  return (
    <div>

        <div className="card shadow mb-5 bg-white rounded">


          <div className="card-body">

            <p className="card-title text-center shadow  mt-2 rounded">Book a Car</p>

            <div className="icons text-center">

              {/* <i className="fa fa-plane fa-2x" aria-hidden="true"></i>
              <i className="fa fa-taxi fa-2x" aria-hidden="true"></i> */}
              <i className="fa fa-train fa-2x" aria-hidden="true"></i>


            </div>

            <hr/>

              {/* <p className="searchText"><strong>Search For Cheap Flights</strong></p> */}

                {/* <!--First Row--> */}
              {/* <div class="row mb-3 mt-3">

                <label className="radiobtn"><input type="radio" name="gender" value="male"/>One Way</label>
                <label className="radiobtn"><input type="radio" name="gender" value="male"/>Round Trip</label>

              </div> */}


              {/* <!--Second Row--> */}
              <div className="row pt-3">

                <div className="col-sm-6">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Select Model</option>
                    <option value="1">Toyota</option>
                    <option value="2">Hyundai</option>
                    <option value="3">Benz</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Select</option>
                    <option value="1">Need a Driver</option>
                    <option value="2">Don't need a Driver</option>

                  </select>
                </div>

              </div>

               {/* <!--Second Row--> */}
               <div className="row pt-3">

<div className="col-sm-6">
  <select className="browser-default custom-select mb-4" id="select">
    <option value="" disabled="" selected="">Number of sits</option>
    <option value="1">Toyota</option>
    <option value="2">Hyundai</option>
    <option value="3">Benz</option>
  </select>
</div>

<div className="col-sm-6">
  <select className="browser-default custom-select mb-4" id="select">
    <option value="" disabled="" selected="">Price range</option>
    <option value="1">Need a Driver</option>
    <option value="2">Don't need a Driver</option>

  </select>
</div>

</div>


              {/* <!--Third Row--> */}
              <div className="row">

                <div className="col-sm-6">
                  <input placeholder="&#xf073; Expected Arrival Date " type="text" id="date-picker-example" className="form-control datepicker mb-4" style={{"font-family":"Arial, FontAwesome"}} />
                </div>

                <div class="col-sm-6">
                  <input placeholder="&#xf073; Expected Departure Date" type="text" id="date-picker-example" className="form-control datepicker" style={{"font-family":"Arial, FontAwesome"}} />
                </div>

              </div>


              {/* <!--Fourth Row--> */}
              <div className="row mt-4">

                <div className="col-sm-6">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Anytime</option>
                    <option value="1">6:00 AM</option>
                    <option value="2">3:00 PM</option>
                    <option value="3">6:00 PM</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Anytime</option>
                    <option value="1">6:00 AM</option>
                    <option value="2">3:00 PM</option>
                    <option value="3">6:00 PM</option>
                  </select>
                </div>

              </div>




              {/* <!--Fifth Row--> */}
              {/* <div className="row">

                <div className="col-sm-4">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Kids(0-14)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="col-sm-4">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Adults(15-64)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="col-sm-4">
                  <select className="browser-default custom-select mb-4" id="select">
                    <option value="" disabled="" selected="">Seniors(65+)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>



              </div> */}
              <div > 
              <a href="#" className="btn btn-primary float-right mt-5">Continue</a> <span class="btn btn-warning bg-white mt-5"> -> Payment Details</span>
          
              </div>
          </div>
        </div>

    </div>
  )
}

export default BookCar

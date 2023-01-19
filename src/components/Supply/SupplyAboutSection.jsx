import React from 'react'
import driver2 from '../../assets/img/driver2.jpeg'
import cheese3 from '../../assets/img/supply/cheese3.jpeg'

const SupplyAboutSection = () => {
  return (
    <div class="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={cheese3}/> 
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4"> First Place To Find Cheese On Affordable Price</h1>
                        <p className="mb-4">River classe Supply is a company based in Rwanda, that supply different grocelies but for now we are delivering cheese in different Supermarkets and hotels on Affordable price and also we deliver free of cost. Don't hesitate to contact us. </p>
                        <p><i className="fa fa-check text-primary me-3"></i>Free Delivery</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Affordable Price</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Quality Products</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Anytime & Anywhere</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SupplyAboutSection

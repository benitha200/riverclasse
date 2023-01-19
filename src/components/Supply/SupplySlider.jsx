import food1 from '../../assets/img/bar-resto/food1.jpeg';
import Driver1 from '../../assets/img/driver1.jpeg';
import cheese1 from '../../assets/img/supply/cheese2.jpeg'

import WOW from 'wowjs';

import React from 'react'

const SupplySlider = () => {
    // componentDidMount() {
    //     new WOW.WOW({
    //       live: false
    //     }).init();
    //   };
      
    //   useEffect(() => {
    //     new WOW.WOW({
    //       live: false
    //     }).init();
    //   }, [])
  return (
    <div className="container-fluid header bg-white p-0 pt-5">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-6 animated fadeIn mb-4 pt-4">Order<span className="text-primary"> Cheese packages</span> in River Classe Supply</h1>
            <p className="animated fadeIn mb-4 pb-2">Supermarkets and Hotels, This is the good place where you can order Cheese on very affordable price.</p><p>Free delivery :)</p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Call us : +250785639237</a>
        </div>
        <div className="col-md-6 animated fadeIn">
            <div>
            {/* <div className="owl-carousel header-carousel"> */}
                {/* <div className="owl-carousel-item"> */}
                <div>
                    <img src={cheese1} className="img-fluid"  alt=""/>
                </div>
                {/* <div className="owl-carousel-item">
                    <img className="img-fluid" src={Driver1} alt=""/>
                </div> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default SupplySlider
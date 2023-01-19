import React from 'react'
import SupplyAboutSection from './SupplyAboutSection'
import SupplySlider from './SupplySlider'
import SupplyWhySection from './SupplyWhySection'

const Supply = () => {
  return (
    <div>
        <SupplySlider/>
        <SupplyWhySection/>
        <SupplyAboutSection/>
    </div>
  )
}

export default Supply
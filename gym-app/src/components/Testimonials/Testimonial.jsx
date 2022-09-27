import React from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react'
const Testimonial = () => {
  const [selected,setselected] =useState(0)
const tLength= testimonialsData.length
  return (
    <div className='testimonial'>

      <div className="left-t">
        <span>Testimonials</span><span>What they</span><span>say about us</span>

        <span>
          {testimonialsData[selected].review}
        </span>

        <span>
          <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>{" "}
          <span>- {testimonialsData[selected].status}</span>
        </span>


      </div>

{/* left side end here................... */}


      <div className="right-t">
        <div></div>
        <div></div>
         <img src={testimonialsData[selected].image} alt="" />

         <div className="arrows">
          <img src={leftArrow} alt=""  onClick={()=>{
                 selected===0?setselected(tLength-1):setselected((prev)=>prev-1)
          }}/>
          <img src={rightArrow} alt="" onClick={()=>{
            selected===tLength-1?setselected(0):setselected((prev)=>prev+1)
          }} />
         </div>

      </div>
      
    </div>
  )
}

export default Testimonial

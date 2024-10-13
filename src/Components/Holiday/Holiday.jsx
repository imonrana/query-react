import React from 'react'
// import img
import holydayImg from "../../assets/holiday_img.png"
const Holiday = () => {
  return (
    <section id="holiday">
    <div className="container">
     <div className="holiday_warpper">
         <div className="holi_img">
             <img src={holydayImg} alt="holiday_img" />
         </div>
         <div className="holiday_details">
             <h6 className="sub_title">EAST NUSA TENGGARA</h6>
             <h2 className="title">
                 Have you <span>enjoyed your</span> <span>holiday?</span>
             </h2>
             <p className="pera">You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
             <button type="button"><a href="#">read more</a></button>
         </div>
     </div>
    </div>
 </section>
  )
}

export default Holiday
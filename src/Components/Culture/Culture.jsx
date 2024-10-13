import React from 'react'
// import img

import cultureImg from "../../assets/culture_img.jpg"
const Culture = () => {
  return (
    <section id="culture">
    <div className="container">
      <div className="culture_warpper">
          <div className="culture_info">
              <h6 className="sub_title">
                  INDONESIAN CULTURE
              </h6>
              <h2 className="title">
                  Our culture here is very friendly to people
              </h2>
              <p className="pera">
                  known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.
              </p>
              <button type="button"> <a href="#">read more</a></button>
          </div>
          <div className="culture_img">
              <img src= {cultureImg} alt="culture_img" />
          </div>
      </div>
    </div>
  </section>
  )
}

export default Culture
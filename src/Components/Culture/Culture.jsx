import React from 'react'
// import img

import cultureImg from "../../assets/culture_img.jpg"
const Culture = () => {
  return (
    <section id="culture">
    <div class="container">
      <div class="culture_warpper">
          <div class="culture_info">
              <h6 class="sub_title">
                  INDONESIAN CULTURE
              </h6>
              <h2 class="title">
                  Our culture here is very friendly to people
              </h2>
              <p class="pera">
                  known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.
              </p>
              <button type="button"> <a href="#">read more</a></button>
          </div>
          <div class="culture_img">
              <img src= {cultureImg} alt="culture_img" />
          </div>
      </div>
    </div>
  </section>
  )
}

export default Culture
import React from 'react'
// import img
import footerLogo from "../../assets/footer_logo.png"

// fontowesome icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
    <div className="container">
        {/* <!-- item top start --> */}
        <div className="item_top">
            <div className="footer_logo">
                <img src={footerLogo} alt="Footer_logo" />
            </div>
            <div className="item_top_right">
                <p>
                    Ready to explore?
                </p>
                <button type="button"><a href="#">Get Started</a></button>
            </div>
        </div>
        {/* <!-- item top end --> */}
         {/* <!-- item middle start --> */}
        <div className="item_middle">
            {/* <!-- footer title start --> */}
            <div className="footer_title">
                <h3>
                    Let's go on vacation, Make your day
                </h3>
                <p className="trams">
                    <a href="#">Terms & Conditions</a>
                </p>
                <div className="social_icon">
                    <a href="#"> <FontAwesomeIcon icon={faFacebookF} className='icon' /> </a>
                    <a href="#"> <FontAwesomeIcon icon={faTwitter} className='icon' /></a>
                    <a href="#">  <FontAwesomeIcon icon={faInstagram} className='icon' /> </a>
                    
                </div>
            </div>
            {/* <!-- footer title end --> */}
             {/* <!-- footer lis start --> */}
            <div className="footer_list">
                <div className="service">
                    <h6>
                        Services
                    </h6>
                    <ul>
                        <li>
                            <a href="#">Email Marketing</a>
                        </li>
                        <li>
                            <a href="#">Campaigns</a>
                        </li>
                        <li>
                            <a href="#">Branding</a>
                        </li>
                        <li>
                            <a href="#">Offline</a>
                        </li>
                    </ul>

                </div>
                <div className="about">
                    <h6>
                        About
                    </h6>
                    <ul>
                        <li>
                            <a href="#"> Our Story</a>
                        </li>
                        <li>
                            <a href="#">Benefits</a>
                        </li>
                        <li>
                            <a href="#">Term</a>
                        </li>
                        <li>
                            <a href="#">Career</a>
                        </li>
                    </ul>
                </div>

                <div className="help">
                    <h6>
                        Help
                    </h6>
                    <ul>
                        <li>
                            <a href="#">FAQ’S</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- footer list end --> */}
        </div>
        {/* <!-- item middle end --> */}
         <div className="item_bottom">
            <p>
                Copyright 2023 QWERy
            </p>
         </div>
    </div>
</footer>
  )
}

export default Footer
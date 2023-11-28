import React from 'react'
import logo from '../Assets/DataVerseLogo.png';
import "./letsConnect/letsconnect.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
          <div class="footer">
                <div>
                   <Link to="/"><img src={logo} alt="dataverse logo" width="100px" /></Link> 
                    <div class="content">
                    <p>
                        &copy; dataverse,The Data
                        Science Club 2023-24. <br />
                        All rights reserved.
                        </p>
                        </div>
                </div>
                <div></div>
                <div class="list">
                    <table>
                        <tr>
                            <td><a href="#">FAQ</a></td>
                            {/* <td><a href="#">About</a></td> */}
                        </tr>
                        <tr>
                            <td><a href="#">Contact</a></td>
                            {/* <td><a href="#">Benefits</a></td> */}
                        </tr>
                        <tr>
                            <td><a href="/#team">Our Team</a></td>
                            {/* <td><a href="#">Carrers</a></td> */}
                        </tr>
                    </table>
                <div class="tags"> 
                    <a href="https://www.linkedin.com/in/dataverseabesec?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin" style={{color: "#5a91e2"}}></i></a>
                    <a href="https://www.instagram.com/dataverse.abesec/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"
                        style={{color: "#5a91e2"}}></i></a>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
import React from 'react'
import "./letsconnect.css"
import DataVerseLogo from "./DataVerseLogo.png"
import Footer from '../Footer'
const LetsConnect = () => {
    return (
        <div>
            <div class="bottom">
                <div class="developed">
                    <center>
                        <img src={DataVerseLogo} alt='logo' width="250px" />
                        <h2>Developed And Powered By Dataverse <br /> The Data Science Club Of ABESEC</h2>
                    </center>
                </div>
                <hr style={{ border: "1px solid gray; opacity: 0.6" }} />
                <div class="letsConnect">
                    <div>
                        <h1><i>Let's</i></h1>
                        <h1><i><span>connect</span></i></h1>
                    </div>
                    <div>
                        <pre class="lets">If you're curious about us, <br />
                            we're
                            ready to answer any and <br />
                            all
                            questions.</pre>
                        <button class="button">Contact US</button>
                    </div>
                </div>
            </div>
            <Footer />
          
        </div>

    )
}

export default LetsConnect






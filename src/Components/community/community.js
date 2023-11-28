import React from 'react'
import "./community.css"
import Background from "./background2.jpeg"

const Community = () => {
    return (
        <div className='w-full'>
            <div class="c-container">
                <div class="column">
                    <div class="section">
                        <h1 style={{color: "#5A91E2"}}>The community<br /> that aims big.</h1>
                    </div>

                    <div class="image">
                        <img src={Background} alt="img" />

                    </div>
                </div>

                <div class="column1">
                    <div class="section">
                        <p class="p1">We Aim.</p>
                        <p class="p2">At Dataverse, our aim is evident: We strive to inspire, educate, and empower technology enthusiasts, fostering a vision for a brighter digital future. We, Datanauts, diligently work on shaping tomorrow, coding the future one line at a time. We are dedicated to create a healthy learning environment among peers, where knowledge sharing and skill development booms.</p>
                        <hr class="divider" />
                        <p class="p1">We Grow.</p>
                        <p class="p2">Growth is at heart of Dataverse Club. We are commited to personal and collective development. Our community serves as a nurturing ground for skills, knowledge, and leadership. We believe that knowledge is power. It is the driving force behind innovation, that helps for personal growth and skills enhancement.</p>
                        <hr />
                        <p class="p1">We Win.</p>
                        <p class="p2">Having community of supportive peers with shared mission, visions and goals can open many doors professionally and personally. Hearing about experiences and point of views expand our mind and worldview, exposing to new ways of thinking and living. We, at Dataverse, celebrates the achievements of our members and the club as a whole. We know that every win brings us closer to our ultimate goals. </p>
                        <br />
                        <p class="p2">"Teamwork makes the dream work!"</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
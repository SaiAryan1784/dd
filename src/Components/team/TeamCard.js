import React from 'react'
import "./team.css"

function TeamCard(props) {
  let value=`${props.state.translateBox}px`
  return (
    <div className={props.state.boxClass} style={{transform:`translate3d(${value},0px,0px`}}>
              <div className="memberPost"><h3>{props.memberName}</h3><p>{props.memberYear}</p><p>{props.memberPost}</p></div>
              <div className="imagecontain">
                <img src={props.imageName} alt="" />
              </div>
            </div>
  )
}

export default TeamCard
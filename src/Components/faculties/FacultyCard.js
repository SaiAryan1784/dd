import React from 'react'
import "./faculty.css"

function FacultyCard(props) {
  return (
    <div className={props.state.boxClass} >
              <div className="facultyPost"><h3>{props.memberName}</h3><p>{props.memberPost}</p></div>
              <div className="imagecontain">
                <img src={props.imageName} alt="" />
              </div>
            </div>
  )
}

export default FacultyCard
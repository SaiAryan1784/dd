import "./faculty.css"
import React, { Component } from 'react';
import FacultyCard from './FacultyCard';

class Faculty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullTeam: "none",
            boxClass: "faculty-box"
        }
    }
    render() {
        return (
            <section className="facultyhome" id="faculty">
                <div
                    className="faculty-container">
                    <h1>"Faculties"</h1>
                    <div className="faculty-card-container">
                        <FacultyCard state={this.state} imageName={require('./HOD-modified.png')} memberName={`Prabhat Sharma`}
                            memberPost={`HOD of DS Dept`} />
                        <FacultyCard state={this.state} imageName={require('./ClubCoordinator-modified (1).png')} memberName={`Dimple Tiwari`}
                            memberPost={`Club Coordinator`} />

                    </div>

                </div>
            </section>

        );
    }
}





export default Faculty;

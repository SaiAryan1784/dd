import './team.css'
import React, { Component } from 'react';
import TeamCard from './TeamCard';

class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullTeam: "none",
      boxClass: "team-box",
      translateBox: 0,

    }
  }

  viewTeam = () => {
    if (this.state.translateBox > -700) {

      this.setState({
        translateBox: this.state.translateBox - 290,
      })
    }
    else {
      this.setState({
        translateBox: 0
      })
    }
  }
  prevTeam = () => {

    if (this.state.translateBox !== 0) {

      this.setState({
        translateBox: this.state.translateBox + 290,
      })
    } else {
      this.setState({
        translateBox: 0
      })
    }



  }


  render() {
    return (
      <section className="teamhome" id="team">
        <div className="home2">
          <div
            className="team-container"
          >
            <h1>MEET THE "<span className='h1-span'>TEAM</span>"</h1>

            <div className="" id="teamContainer">
              <div className='new-team-card-div'>
                <div className="card-container team-box ">
                  <TeamCard className="sec-card-container" state={""} imageName={require('./president-modified.png')} memberName={`Shubhangi Sharma`}
                    memberYear={`4th`}
                    memberPost={`President`} />
                </div>
              </div>
              <div className="card-container">
                <TeamCard state={this.state} imageName={require('./vicePresident-modified.png')} memberName={`Arpit Vaksh`}
                  memberYear={`4th`}
                  memberPost={`Vice President`} />
                <TeamCard state={this.state} imageName={require('./overallCordinator-modified.png')} memberName={`Aastha Agarwal`}
                  memberYear={`4th`}
                  memberPost={`Overall Coordinator`} />
                <TeamCard state={this.state} imageName={require('./Graphic-supervisor-modified.png')} memberName={`Priya Rajput`}
                  memberYear={`4th`}
                  memberPost={`Graphics Supervisor`} />
                <TeamCard state={this.state} imageName={require('./GraphicsSupervisor-modified.png')} memberName={`Harshita Khurana`}
                  memberYear={`4th`}
                  memberPost={`Graphics Supervisor`} />

              </div>
              <div className="card-container">
                <TeamCard state={this.state} imageName={require('./TechnicalHead-modified.png')} memberName={`Nimish Singh`}
                  memberYear={`4th`}
                  memberPost={`Technical Head`} />
                <TeamCard state={this.state} imageName={require('./Technical-Head-modified.png')} memberName={`Utkarsh Verma`}
                  memberYear={`4th`}
                  memberPost={`Technical Head`} />
                <TeamCard state={this.state} imageName={require('./Promotion-modified.png')} memberName={`Roshan Raj`}
                  memberYear={`4th`}
                  memberPost={`Promotion Head`} />
                <TeamCard state={this.state} imageName={require('./PromotionalHead-modified.png')} memberName={`Yadvendra`}
                  memberYear={`4th`}
                  memberPost={`Promotional Head`} />

              </div>
            </div>
            <div className="teamBtnContainer">

              <button className="teambutton" onClick={() => this.prevTeam()}><i class="fa-solid fa-chevron-left"></i></button>
              <button className="teambutton" onClick={() => this.viewTeam()}><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Team;


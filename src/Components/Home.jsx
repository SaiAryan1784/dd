import React from 'react';
import bgimg from '../Assets/WholeBG.jpg';
import "./home.css"
import Nav from './Nav';
const Home = () => {
    const style = {
        backgroundImage: `url(${bgimg})`,
    };

    return (
        <div className="bg-cover bg-bottom h-screen z-0 opacity-[1] w-screen" style={style} id='home-section'>
            {/* <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.5)' }}></div> Dark overlay */}
                 <Nav />

            <div className=' w-screen max-w-screen-lg text-center font-Orbitron text-8xl font-semibold text-white mx-auto z-10 py-40 '>
                <h1 className='h1-name1'>WELCOME TO</h1>
            <div className='w-screen max-w-screen-lg text-center font-Orbitron  font-semibold text-white mx-auto mt-[3%]  z-10  '>
                <h1 className='h1-name'>DATAVERSE</h1>
            </div>
            </div>
        </div>
    );
};

export default Home;

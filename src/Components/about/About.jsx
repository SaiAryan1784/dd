import React from "react";
import bgimg from "./panoramic-view-sunset-night.jpg";
import UnionImage from "./Union.png";

const About = () => {
  const style = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover", // Adjust this property for sizing
    backgroundPosition: "bottom", // Adjust this property for positioning
    color: "white", // Text color
    height: "900px",
    overflow: "hidden", // This will prevent scrolling
  };

  return (
    <div
      className='relative bg-cover bg-bottom text-white w-full '
      style={style}
      id='about-section'
    >
      <div className='relative top-10 font-Orbitron'>
        <h1 className='text-6xl text-center '>
          What Is <strong className=' text-blue-500'>Dataverse</strong>
        </h1>
      </div>
      <div className='absolute top-48 sm:top-36 left-[50%] translate-x-[-50%]'>
        <img className="w-[23vw] h-[80vh]"  src={UnionImage} alt='union_image' />
      </div>
      <div className='w-[100vw]  lg:w-[100vw] xl:w-[85vw] 2xl:w-4/5 mx-auto h-screen  grid grid-rows-3 items-center'>
        <div className='w-full h-full  grid grid-cols-2 gap-[23%] xl:gap-[25%] 2xl:gap-[28%]'>
          <div className='w-full h-full  flex items-end justify-end '>
            <div className='box bg-opacity-10 bg-white bg-blur-md rounded-lg p-3 h-[70%] w-[90%] flex flex-col justify-center'>
              <h2 className='text-[11px] sm:text-sm xl:text-[18px] text-white font-bold'>Need</h2>
              <p className="text-[11px] sm:text-sm xl:text-[18px]">
                "Data science is the compass that guides us through the vast sea
                of information, helping us navigate and make sense of it all."
              </p>
            </div>
          </div>
          <div className='w-full h-full  flex items-end justify-start'>
            <div className='text-[11px] sm:text-sm xl:text-[18px] box bg-opacity-10 bg-white bg-blur-md rounded-lg p-3 h-[70%] w-[90%] flex flex-col justify-center'>
              <h2 className=' text-white font-bold'>Our Motto</h2>
              <p className="text-[11px] sm:text-sm xl:text-[18px]">
                "Data science is the compass that guides us through the vast sea
                of information, helping us navigate and make sense of it all."
              </p>
            </div>
          </div>
        </div>
        <div className='w-full h-full  grid grid-cols-2 py-14 gap-[10%] xl:gap-[10%] 2xl:gap-[12%]'>
          <div className='w-full h-full  flex items-start justify-end'>
            <div className='box bg-opacity-10 bg-white bg-blur-md rounded-lg h-full w-[90%] sm:w-[80%] p-3 flex flex-col justify-center'>
              <h2 className='text-[11px] sm:text-sm xl:text-[18px] text-white font-bold'>Events</h2>
              <p className="text-[11px] sm:text-sm xl:text-[18px]">
                "Data science is the compass that guides us through the vast sea
                of information, helping us navigate and make sense of it all."
              </p>
            </div>
          </div>
          <div className='w-full h-full  flex '>
            <div className='box bg-opacity-10 bg-white bg-blur-md rounded-lg p-3 w-[90%] sm:w-[80%] h-full flex flex-col justify-center'>
              <h2 className='text-[11px] sm:text-sm xl:text-[18px] text-white font-bold'>Vision</h2>
              <p className="text-[11px] sm:text-sm xl:text-[18px]">
                "Data science is the compass that guides us through the vast sea
                of information, helping us navigate and make sense of it all."
              </p>
            </div>
          </div>
        </div>
        <div className='w-full h-full  grid grid-cols-2 gap-[23%] xl:gap-[25%] 2xl:gap-[28%]'>
          <div className='w-full h-full  flex items-start justify-end'>
            <div className='box bg-opacity-10 bg-white bg-blur-md rounded-lg p-3  h-[70%] w-[90%] flex flex-col justify-center'>
              <h2 className='text-[11px] sm:text-sm xl:text-[18px] text-white font-bold'>Mission</h2>
              <p className="text-[11px] sm:text-sm xl:text-[18px]">
                We aim to bridge the gap between alumni and students. This can
                be done by conducting various mentorship sessions.
              </p>
            </div>
          </div>
          <div className='w-full h-full  flex items-start justify-start'>
            <div className='box bg-opacity-10 bg-white bg-blur-md rounded-lg p-3 h-[70%] w-[90%] flex flex-col justify-center'>
              <h2 className='text-[11px] sm:text-sm xl:text-[18px] text-white font-bold'>Connect</h2>
              <p className="text-[11px] sm:text-sm xl:text-[18px]">
                Our community has a goal to connect all the college students to
                the great leaders of today, And Make Sense Of It All.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

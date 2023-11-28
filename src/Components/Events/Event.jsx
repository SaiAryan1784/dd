import React from 'react';
import bgimg from './panoramic-view-sunset-night.jpg';

const Event = () => {
    const style = {
        backgroundImage: `url(${bgimg})`,
    };
  
    return (
        <div className="bg-cover bg-bottom h-[40vw] z-0 text-white" style={style}>
            <div className=' relative h-screen flex flex-col top-[12%] w-auto'>
                <div className='w-screen max-w-screen-lg flex gap-[4rem] font-Orbitron font-medium text-lg items-center p-2 px-4 mx-auto'>
                    <h2>What's New</h2>
                    <h2>Events</h2>
                    <h2>Tech Tips</h2>
                </div>
                <div class="container px-5 py-6 mx-auto">
                <div class="flex flex-wrap -m-4 ">
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 h-[25rem]">
                        <div class="h-full text-center bg-slate-800 rounded-3xl">
                            
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center bg-slate-800 rounded-3xl">

                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center bg-slate-800 rounded-3xl">

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Event;

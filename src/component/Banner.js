import React from 'react';
import bannarImg from '../../src/pic/istockphoto-1181366400-612x612.jpg'
import './Background.css'
import resume from '../../src/pic/myResume.pdf'

const Banner = () => {
    return (
        <div className="w-full">
  <div className=" relative w-full">
    <div className='bannerBg'>
    <img src={bannarImg} className="w-full" />
    </div>
    <div className="absolute left-10 top-1/4">
      <h1 className='text-5xl text-white font-bold'>Hi I'm <br /> Mohammad Sohan </h1>
      <br />
      
      
    </div>
    <div className="absolute flex left-10 top-1/2">
     <p className='text-white' ><span className='text-3xl font-bold'>I Build My Portfolio</span> <br /> I am a Front End Developer, specializing in JavaScript, React JS, HTML5, CSS3,<br /> JavaScript ES6, Tailwind CSS, Bootstrap, React Bootstrap, Daisy UI, <br /> and Firebase Authentication. I also feel comfortable using Nodejs, Express.JS, <br /> creating REST API using MongoDB CRUD, and Secure API using JWT. <br />
    
     </p>
      
      
    </div>
    <div className="absolute left-10 top-3/4">
    
    <a href={resume} download="resume"><button className="btn btn-outline btn-primary">Download Resume</button>  
      </a>
    </div>
   
        
  </div> 
</div>
    );
};

export default Banner;
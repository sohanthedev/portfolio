import React from 'react';
import cardImg1 from '../../src/pic/first.png'
import cardImg2 from '../../src/pic/tec.png'
import cardImg3 from '../../src/pic/second.png'


const Card = () => {
    return (
        <div>
            <h1 className='my-11 text-4xl font-bold text-center'>My Portfolio</h1>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={cardImg1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Online Courses</h2>
    <p>This is a full stack web 
project and this is a responsive website.</p>
    <div className="card-actions justify-end">
      <a href="https://coursehub-36a80.web.app/"><button className="btn btn-outline btn-primary">View Project</button></a>
    </div>
  </div>
</div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={cardImg2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">TechMax</h2>
    <p>This is a full stack web project and this is a responsive website.</p>
    <div className="card-actions justify-end">
      <a href="https://techmaxa.web.app/"><button className="btn btn-outline btn-primary">View Project</button></a>
    </div>
  </div>
</div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={cardImg3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Online Quiz App</h2>
    <p>This is also a full stack web project and That's I have created a few days Ago</p>
    <div className="card-actions justify-end">
     <a href="https://jocular-sunshine-dccf8a.netlify.app/"> <button className="btn btn-outline btn-primary">View Project</button></a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Card;
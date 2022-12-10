import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Contact from './Contact';
import Skill from './Skill';



const Home = () => {
    return (
        <div className='my-4'>
            <Banner></Banner>
            <Card></Card>
           <Skill></Skill>
           <Contact></Contact>
        </div>
    );
};

export default Home;
import React from 'react';
import Hero from '../Home/Hero.jsx';
import Trending from '../Home/Trending.jsx';
import Food from '../Home/Food.jsx';
import Creator from '../Home/Creator.jsx';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Trending/>
      <Food/>
      <Creator/>
    </div>
  )
}

export default Home
import React from 'react';
import './home.css';
import LazyBackground from '../common/lazy-background-loader';

const Home = () => {
  const imageSrc = '/splash_3.jpg';
  // const imageSrc = 'https://live.staticflickr.com/65535/47931967223_fbe2cdb7a1_b.jpg';
  return (
    <div className="home-body">
      <LazyBackground src={imageSrc} />
    </div>
  );
};

export default Home;

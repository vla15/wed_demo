import React from 'react';
import './home.css';
import LazyBackground from '../common/lazy-background-loader';

const Home = () => {
  const imageSrc = `${process.env.PUBLIC_URL}/splash_3.jpg`;
  return (
    <div className="home-body">
      <LazyBackground src={imageSrc} />
    </div>
  );
};

export default Home;

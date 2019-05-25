/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './story.css';

const Story = () => (
  <div className="story-container">
    <div className="story-overlay" />
    <div className="story-image-container">
      <img className="story-image" src={`${process.env.PUBLIC_URL}/splash.jpeg`} />
    </div>
    <div className="story-text">
    Betty said to remove this text because she was embarassed about what she had wrote here.   We will continue to write in here as time progresses.  Work in Construction!
    </div>
  </div>
);

export default Story;

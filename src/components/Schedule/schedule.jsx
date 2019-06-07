/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './schedule.css';

const Schedule = () => (
  <div
    className="section-container"
  >
    <div className="grey-overlay" />
    <div style={{ padding: '2rem', zIndex: 2 }}>
      <div style={{ marginBottom: '1rem' }}>
        <h4 className="section-header">Wedding Day Schedule</h4>
        <h4 className="section-header">婚禮日安排</h4>
      </div>
      <div className="tea-ceremony-section text-content-section">
        <h5 style={{ fontWeight: 'bold' }}>Tea Ceremony</h5>
        <div>We will be doing the traditional tea ceremony for our family and relatives at our AirBnB. We or our parents will reach out to confirm your attendance. Let us know if you have any questions.</div>
      </div>
      <div className="ceremony-reception-section text-content-section">
        <h5 style={{ fontWeight: 'bold' }}>Ceremony & Reception</h5>
        <div style={{ marginBottom: '1rem' }}>The ceremony and reception take place at the same location. The ceremony will be outdoors, and the reception will be indoors. </div>
        <div>Ceremony: Dec 21, 2019, TBD -  Mid Afternoon</div>
        <div>Cocktail Hour: TBD</div>
        <div>Reception: TBD</div>
      </div>
      <div className="wedding-location text-content-section">
        <div>Wedgewood Weddings Redwood Canyon</div>
        <div>17007 Redwood Road</div>
        <div style={{ marginBottom: '1rem' }}>Castro Valley, CA 94546</div>
        <iframe
          style={{
            width: '70vw', height: '40vh', border: 0, marginBottom: '1rem',
          }}
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1QGSEP-Nj4AR0vJH0krIMBY&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          allowFullScreen
        />
        <div>If you are not planning on driving, we strongly suggest arranging transit home beforehand as cell service is spotty at the venue. There is wifi on premise.  </div>
      </div>
    </div>
  </div>
);

export default Schedule;

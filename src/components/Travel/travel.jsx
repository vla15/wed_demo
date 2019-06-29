/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Travel = () => (
  <div className="section-container travel-container">
    <div className="grey-overlay" />
    <div style={{ padding: '2rem', zIndex: 2 }}>
      <div style={{ marginBottom: '1rem' }}>
        <h4 className="section-header">Travel</h4>
      </div>
      <div className="text-content-section">
        <h5 style={{ fontWeight: 'bold' }}>Closest Airports</h5>
        <ul className="info-list-container">
          <li className="info-list-item">SFO (28 mins) - San Francisco International Airport</li>
          <li className="info-list-item">SJC (30 mins) - Norman Y. Mineta San Jose International Airport</li>
          <li className="info-list-item">OAK (20 mins) - Oakland International Airport</li>
        </ul>
      </div>
      <div className="text-content-section">
        <h5 style={{ fontWeight: 'bold' }}>Hotel</h5>
        <div style={{ marginBottom: '2rem' }}>
          <div>Located about 8 minutes away from the wedding venue. Blocked rooms are available for $152 + tax per night between Dec 20 - Dec 21. Please use the link below to make a reservation or call and mention you&apos;re looking to book as part of the Chow-La wedding block.</div>
          <div style={{ marginBottom: '1rem' }} />
          <div>Holiday Inn Expres</div>
          <div>2419 Castro Valley Blvd,</div>
          <div>Castro Valley, CA 94546</div>
          <div><a style={{ color: '#e2e4e9' }} href="tel:855-373-7282">855-373-7282</a></div>
          <button type="button" className="btn btn-warning" style={{ paddingTop: '2px', paddingBottom: '2px', marginTop: '5px' }}>
            <a target="_blank" href="https://www.hiexpress.com/redirect?path=hd&brandCode=EX&localeCode=en&regionCode=1&hotelCode=OAKCV&_PMID=99801505&GPC=CLW&cn=no&viewfullsite=true">Reserve a room here</a>
          </button>
        </div>
        <h5>Hotel Accommodations include:</h5>
        <ul className="info-list-container">
          <li className="info-list-item">High Speed Internet</li>
          <li className="info-list-item">Hot Breakfast Buffet</li>
          <li className="info-list-item">Daily self-parking</li>
        </ul>
        <h5 style={{ fontWeight: 'bold' }}>Notes</h5>
        <div>Last Day to book reservations at the Group Rate is on Nov 28th, 2019</div>
        <div style={{ marginBottom: '1rem' }}>Cancellation Policy: Individual confirmed reservations can be cancelled/modified up to Dec 15th, 2019 by 6:00pm PST to avoid late cancellation/no-show penalty of 1 night stay.</div>
        <div>If you have any trouble booking the rooms, please do not hesitate to contact us.</div>
      </div>
    </div>
  </div>
);

export default Travel;

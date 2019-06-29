/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './faq.css';
import FaqItem from './faq-item';

function FAQ() {
  return (
    <div className="section-container faq-container">
      <div className="grey-overlay" />
      <div style={{ padding: '2rem', zIndex: 2, width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h4 className="section-header">Q&A</h4>
        </div>
        <div className="text-content-section">
          <ul className="faq-list-container">
            <FaqItem title="Whats on the menu?">
              <h5 style={{ fontWeight: 'bold' }}>MENU 菜單</h5>
              <div className="card-title">Drink up! We have an open bar!</div>
              <div>
                <h4 className="section-header">Cocktail hour</h4>
                <div>Hors d&apos;oeuvre - </div>
                <div>
                  <b>Chilled</b>
                  <ul className="info-list-container">
                    <li className="info-list-item">Avocado-Corn Bruschetta</li>
                    <li className="info-list-item">Tomato and Mozzarella Caprese Skewers</li>
                    <li className="info-list-item">Ahi Tuna Wontons with Wasabi Cream</li>
                  </ul>
                </div>
                <div>
                  <b>Hot</b>
                  <ul className="info-list-container">
                    <li className="info-list-item">Sweet and Tangy BBQ Meatballs</li>
                    <li className="info-list-item">Mini Crab Cakes with Spicy Remoulade</li>
                    <li className="info-list-item">Bacon Wrapped Scallops</li>
                    <li className="info-list-item">Mac and Cheese Croquettes (Kid Friendly)</li>
                    <li className="info-list-item">Brie and Apple Phyllo Kisses (Kid Friendly)</li>
                  </ul>
                </div>
                <h4 className="section-header">Reception</h4>
                <div>
                  <div>
                    <b>Entrée</b>
                    <ul className="info-list-container">
                      <li className="info-list-item">Chicken Cordon Bleu with Chardonnay Sauce</li>
                      <li className="info-list-item">Tortellini Pesto Parmesan</li>
                      <li className="info-list-item">Beef, or as Betty calls it &quot;Cow Option&quot;</li>
                    </ul>
                  </div>
                </div>
                <h4 className="section-header">Dessert 甜點 - TBD</h4>
              </div>
            </FaqItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

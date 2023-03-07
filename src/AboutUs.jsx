import React from 'react';
import founder from './assets/photo1.png';
import './AboutUs.css';
export default function AboutUs() {
  return (
    <div className="aboutUs">
      <h1>ABOUT US</h1>
      <div className="founder">
        <div className="founderPic">
          <h2>Dan Morehead</h2>
          <img src={founder} alt="" />
        </div>
        <p>
          “We believe in the future of cryptocurrency, because it entered the
          exchange markets on a strong note. Success in this sphere is assured
          to everyone, who gets the hang of managing risks in this sphere. ”
        </p>
      </div>
      <p className="aboutText">
        Binary Options FX with registration number 14200447 is one of the Best
        Trading Platform, We attract investors in order to get steady income.
        The core of our activity is conducting financial transactions on the
        international exchanges, while managing risks and guaranteeing profits.
      </p>
      <p className="aboutText">
        Our team consists of experienced traders that are engaged in trading
        activity for more than 10 years. We created the financial portfolio with
        active pool of profit from the high-yielding assets. Attracting
        additional capital allows to extend boundaries and to move forward. With
        our company every investor becomes a player on professional exchange
        market.
      </p>
      <a href="#">READ THE WHOLE STORY</a>
    </div>
  );
}

import React from 'react';
import './Home.css';
import houseImage from "../images/housee.jpg";

const Home = () => (
  <section id="home" className="home-section">
    {/* Hero Section */}
    <div className="hero">
      <div className="hero-text">
        <h1 className="title">HousePriceAI</h1>
        <p className="tagline">“Turning data into smart predictions.”</p>
        
        <p className="description">
          Welcome to <strong>HousePriceAI</strong> – your ultimate tool for predicting Melbourne house prices instantly. 
          Whether you're a home buyer, real estate agent, or investor, our app leverages a machine learning model 
          trained on thousands of real Melbourne property listings to give you accurate price estimates in seconds.
        </p>

        <p className="description">
          By entering key property details – rooms, bathrooms, land & building size, distance from the city, year built, 
          and other essential features – you'll receive predictions that help you make informed decisions.
        </p>

        <p className="description">
          <strong>Why choose HousePriceAI?</strong> Fast, easy-to-use, with a modern interface for smooth experience on any device.
        </p>

        <a href="#predict" className="btn-primary">Predict Now</a>
      </div>

      <div className="hero-image">
        <div className="image-overlay">
          <img src={houseImage} alt="House" />
        </div>
      </div>


    </div>

    {/* Features Section */}
    <div className="features">
      <h2>Features of HousePriceAI</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Fast Predictions</h3>
          <p>Get instant house price predictions by filling in key property details.</p>
        </div>
        <div className="feature-card">
          <h3>ML Powered</h3>
          <p>Our model is trained on Melbourne housing data for accurate predictions.</p>
        </div>
        <div className="feature-card">
          <h3>User-Friendly</h3>
          <p>Clean UI with intuitive navigation and responsive design.</p>
        </div>
      </div>
    </div>

    {/* How to Use Section */}
    {/* How to Use Section */}
{/* How to Use Section */}
<div className="how-to-use">
  <h2 className="section-title">How to Use</h2>
  <h3 className="section-subtitle">Follow these simple steps to predict house prices</h3>

  <div className="road-container">
    <div className="road-line"></div>

    <div className="road-step left">
      <div className="step-number">1</div>
      <p>Go to the "Predict" section.</p>
    </div>
    <div className="road-step right">
      <div className="step-number">2</div>
      <p>Enter house details like Rooms, Bathroom, Landsize, etc.</p>
    </div>
    <div className="road-step left">
      <div className="step-number">3</div>
      <p>Click "Predict Price" to get instant estimate.</p>
    </div>
    <div className="road-step right">
      <div className="step-number">4</div>
      <p>Compare with average prices and make informed decisions.</p>
    </div>
  </div>
</div>


  </section>
);

export default Home;

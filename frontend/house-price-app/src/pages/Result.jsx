import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Predict.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { predicted_price, formData } = location.state || {};

  if (!predicted_price) {
    // If someone directly visits /result without prediction
    navigate("/predict");
    return null;
  }

  return (
    <section className="predict-section">
      <div className="predict-container">
        <h2 className="predict-title">Prediction Result</h2>
        <div className="prediction-result">
          Predicted Price: <span>${predicted_price.toLocaleString()}</span>
        </div>

        <div className="mt-6">
          <h3 className="input-label mb-2">Your Input:</h3>
          {Object.entries(formData).map(([key, value]) => (
            <p key={key} className="input-field mb-2">{key}: {value}</p>
          ))}
        </div>

        <button onClick={() => navigate("/predict")} className="predict-btn mt-4">
          Predict Another
        </button>
      </div>
    </section>
  );
};

export default Result;

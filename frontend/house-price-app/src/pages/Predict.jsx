import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Predict.css';

const Predict = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Rooms: '',
    Distance: '',
    Bathroom: '',
    Landsize: '',
    BuildingArea: '',
    YearBuilt: '',
    Propertycount: ''
  });

  // Help text for each field
  const fieldInfo = {
    Rooms: "Total number of rooms in the house.",
    Distance: "Distance from the city center (in km).",
    Bathroom: "Number of bathrooms in the house.",
    Landsize: "Total land area (in square meters).",
    BuildingArea: "Built-up area (in square meters).",
    YearBuilt: "Year in which the house was constructed.",
    Propertycount: "Number of properties in the suburb (helps estimate demand)."
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePredict = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      // Navigate to result page and pass prediction and input data
      navigate("/result", {
        state: { predicted_price: data.predicted_price, formData }
      });
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <section className="predict-section">
      <div className="predict-container">
        <h2 className="predict-title">Enter House Details</h2>
        {Object.keys(formData).map((field) => (
          <div key={field} className="input-group">
            <label className="input-label">{field}</label>
            <span className="field-info">{fieldInfo[field]}</span>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="input-field"
            />
          </div>
        ))}
        <button onClick={handlePredict} className="predict-btn">
          Predict Price
        </button>
      </div>
    </section>
  );
};

export default Predict;

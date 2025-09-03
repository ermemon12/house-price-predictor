import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model and features from ../model folder
model = joblib.load("../model/house_price_model.pkl")
features = joblib.load("../model/features.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    try:
        input_df = pd.DataFrame([data], columns=features)
        prediction = model.predict(input_df)[0]
        return jsonify({"predicted_price": round(prediction, 2)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)

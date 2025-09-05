import os
import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ✅ Get absolute path to the model folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model/house_price_model.pkl")
FEATURES_PATH = os.path.join(BASE_DIR, "model/features.pkl")


# ✅ Load model and features
try:
    model = joblib.load(MODEL_PATH)
    features = joblib.load(FEATURES_PATH)
except Exception as e:
    raise RuntimeError(f"❌ Error loading model or features: {e}")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    try:
        # Ensure input follows feature order
        input_df = pd.DataFrame([data], columns=features)
        prediction = model.predict(input_df)[0]
        return jsonify({"predicted_price": round(prediction, 2)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)

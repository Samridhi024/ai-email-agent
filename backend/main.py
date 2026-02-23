from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
import os

app = Flask(__name__)
CORS(app)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

@app.route("/analyze", methods=["POST"])
def analyze_email():
    try:
        data = request.json
        email_text = data.get("email", "")

        prompt = f"""
        You are an intelligent email processing agent.

        Analyze the email and return ONLY valid JSON in this exact structure:

        {{
          "summary": "...",
          "action_items": ["...", "..."],
          "priority": "High/Medium/Low",
          "suggested_reply": "..."
        }}

        Email:
        {email_text}
        """

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3
        )

        output = response.choices[0].message.content

        return jsonify({"result": output})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()

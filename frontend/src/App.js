import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {
    if (!email.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      const parsed = JSON.parse(data.result);
      setResult(parsed);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">AI Email Action Agent</h1>

      <textarea
        className="textarea"
        placeholder="Paste your email here..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="button" onClick={analyzeEmail}>
        {loading ? "Analyzing..." : "Analyze Email"}
      </button>

      {result && (
        <div className="result-box">
          <h3>Summary</h3>
          <p>{result.summary}</p>

          <h3>Action Items</h3>
          <ul>
            {result.action_items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Priority</h3>
          <p className={`priority ${result.priority.toLowerCase()}`}>
            {result.priority}
          </p>

          <h3>Suggested Reply</h3>
          <p>{result.suggested_reply}</p>
        </div>
      )}
    </div>
  );
}

export default App;
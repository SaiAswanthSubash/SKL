"use client";

import { useState } from "react";

export default function AITutor() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  async function handleSend() {
    if (!question.trim()) return;

    setResponse("Thinking...");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setResponse(data.response);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Tutor</h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a math question..."
        style={{ width: "100%", height: 120 }}
      />

      <button onClick={handleSend} style={{ marginTop: 10 }}>
        Send
      </button>

      <p>{response}</p>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/ask-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }), // ✅ correct key
      });

      const data = await res.json();
      if (res.ok) {
        setResult(data.answer);
      } else {
        setResult("Error: " + (data.detail || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      setResult("Failed to connect to backend.");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Ask a career question..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Ask
        </button>
      </form>
      {result && <p className="mt-4 text-green-700 whitespace-pre-line">{result}</p>}
    </div>
  );
}

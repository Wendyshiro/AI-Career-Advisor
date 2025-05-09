"use client";

import { useState } from "react";

export default function Page() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("http://localhost:8000/ask-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error("Failed to get a response. Please try again.");
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">✨ AI Career Advisor</h1>
        <p className="text-gray-600 text-center">Ask anything about jobs, interviews, or career growth.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="What's your career question?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-xl font-semibold hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Thinking..." : "Get Advice"}
          </button>
        </form>

        {answer && (
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-xl text-gray-800">
            <strong>Advice:</strong> {answer}
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-xl text-red-800">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </main>
  );
}

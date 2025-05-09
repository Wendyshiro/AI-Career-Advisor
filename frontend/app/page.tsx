"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, AlertTriangle, Lightbulb } from "lucide-react";

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
      const response = await fetch("http://127.0.0.1:8000/ask-question", {
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
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="text-purple-600" size={28} />
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            AI Career Advisor
          </h1>
        </div>
        <p className="text-gray-600 text-center">
          Ask anything about jobs, interviews, or career growth.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={5}
            className="w-full max-w-xl mx-auto block border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="What's your career question?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-three-quarters bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Thinking..." : "Get Advice"}
          </button>
        </form>

        {answer && (
          <motion.div
            className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-xl text-gray-800 flex gap-2 items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Lightbulb className="mt-1 text-purple-500" />
            <div>
              <strong>Advice:</strong> {answer}
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="bg-red-100 border-l-4 border-red-500 p-4 rounded-xl text-red-800 flex gap-2 items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <AlertTriangle className="mt-1 text-red-500" />
            <div>
              <strong>Error:</strong> {error}
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}

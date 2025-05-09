export const askAI = async (question: string): Promise<string> => {
  const response = await fetch("http:///127.0.0.1:8000/ask-question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Something went wrong");
  }

  const data = await response.json();
  return data.answer;
};

export async function fetchPrediction(input: string) {
    const response = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    });
  
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
  
    return await response.json();
  }
  
  export async function askQuestion(input: string) {
    const response = await fetch('http://127.0.0.1:8000/ask-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: input }),
    });
  
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
  
    return await response.json();
  }
  
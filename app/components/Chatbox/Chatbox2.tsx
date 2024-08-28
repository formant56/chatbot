"use client";

import React, { useState } from "react";

export const Chatbox2 = () => {
  const [query, setQuery] = useState("hello");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setResponse(data.choices[0].message.content);
        console.log(response);
      } else {
        console.error("Error:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything..."
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

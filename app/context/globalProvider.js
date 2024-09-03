"use client";

import React, { useEffect, useState } from "react";

export const GlobalStateContext = React.createContext();
export const GlobalStateProvider = ({ children }) => {
  const [query, setQuery] = useState("hello");
  const [response, setResponse] = useState("");

  const getOAIResponse = async () => {
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
      } else {
        console.error("Error:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postToMongo = async () => {
    try {
      const res = await fetch("api/database", {
        method: "POST",
        body: JSON.stringify({ query, response }),
      });
    } catch (error) {}
    console.log(res);
  };

  React.useEffect(() => {
    postToMongo();
  }, [response]);

  return (
    <GlobalStateContext.Provider
      value={{ query, setQuery, response, setResponse, getOAIResponse }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);

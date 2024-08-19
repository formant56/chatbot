"use client";

import React from "react";
import { OAICall } from "@/app/api/route";

export const GlobalStateContext = React.createContext();
export const GlobalStateProvider = ({ children }) => {
  const [airesponse, setAiResponse] = React.useState("hello");

  const getApiResponse = async () => {
    try {
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  return (
    <GlobalStateContext.Provider value={{ airesponse, getApiResponse }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);

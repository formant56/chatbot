"use client";

import React from "react";
// THe query must be in this form : {question: "hello", GPTresponse: "Im an assistant..."}
const query = { hello: "world" };
export const Chatbox3 = () => {
  const handleClick = async (e: React.MouseEvent) => {
    const res = await fetch("/api/database", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
    console.log(res);
  };

  return (
    <div>
      <button onClick={handleClick}>COnncet</button>
    </div>
  );
};

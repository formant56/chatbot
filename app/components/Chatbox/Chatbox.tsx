"use client";
import React from "react";
import { APICall } from "@/app/api/route";

const Chatbox = () => {
  const [completion, setCompletion] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await APICall();
        console.log(response);
        setCompletion(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <div>loading</div>;
  }
  if (!completion) {
    return <div>No data available</div>;
  }

  {
    const { id, choices, usage } = completion;
    const { message } = choices[0];

    return (
      <div>
        <h1>{usage.total_tokens}</h1>
        <div>{message.content}</div>
      </div>
    );
  }
};

export default Chatbox;

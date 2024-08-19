"use client";

import React, { useContext } from "react";
import { useGlobalState } from "@/app/context/globalProvider";

export const Chatbox3 = () => {
  const { airesponse, getApiResponse } = useGlobalState();

  const onCLick = async (e: any) => {
    e.preventDefault();
    getApiResponse();
  };

  console.log(airesponse);
  return (
    <>
      <div>{airesponse}</div>
      <button onClick={onCLick}>hi button</button>
    </>
  );
};

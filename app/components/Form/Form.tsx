"use client";

import React from "react";
import { useGlobalState } from "@/app/context/globalProvider";

const Form: React.FC = () => {
  const [formData, setFormData] = React.useState<string>("");
  const { getApiResponse } = useGlobalState();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setFormData(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getApiResponse();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData} onChange={handleChange} />
      <button>submit</button>
    </form>
  );
};

export default Form;

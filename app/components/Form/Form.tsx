"use client"

import React from 'react'

const Form:React.FC = () => {
  const [formData, setFormData] = React.useState<string>("")


  const handleChange = (e:any) =>{
    const value = e.target.value
    setFormData(value)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) =>{
    e.preventDefault()

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={formData} onChange={handleChange}/>
    </form> 
  )
}

export default Form
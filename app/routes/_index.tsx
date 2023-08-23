import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  message: string;
}

export default function Index() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} /> <br />
        <label htmlFor="message">Message </label>
        <input type="text" name="message" value={formData.message} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

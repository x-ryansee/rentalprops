import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/contacts', formData)
      .then(response => {
        console.log(response.data);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={{ backgroundColor: "#E6E2D3", padding: 20, textAlign: "center", margin: "80px"}}>
      <h1 style={{ fontSize: 36, color: "#6F4E37" }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ fontSize: 18, padding: 10, margin: 10 }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ fontSize: 18, padding: 10, margin: 10 }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ fontSize: 18, padding: 10, margin: 10, height: 150 }}
          />
        </div>
        <button type="submit" style={{ fontSize: 18, padding: 10, margin: 10 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

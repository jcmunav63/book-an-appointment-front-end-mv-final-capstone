import React, { useState } from 'react';
import axios from 'axios';

const NewSpaceCwForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    description: '',
    address: '',
    price: '',
    image: '',
    discount: '',
    category: '',
    user_id: '1',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/v1/users/:user_id/space_cws', formData);
      setSuccessMessage('New coworking space created successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // 5 seconds
    } catch (error) {
      setErrorMessage('Error creating coworking space. Please try again later.');
      setTimeout(() => {
        setErrorMessage('');
      }, 8000); // 8 seconds
    }
  };

  return (
    <div>
      <h2>Create a New Coworking Space</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          name="name"
          className="text"
          placeholder="Name:"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* <label htmlFor="model">Model:</label> */}
        <input
          type="text"
          name="model"
          className="text"
          placeholder="Model:"
          value={formData.model}
          onChange={handleChange}
        />

        {/* <label htmlFor="description">Description:</label> */}
        <textarea
          name="description"
          className="textarea"
          rows="5"
          placeholder="Description:"
          value={formData.description}
          onChange={handleChange}
          required
        />

        {/* <label htmlFor="address">Address:</label> */}
        <input
          type="text"
          name="address"
          className="text"
          placeholder="Address:"
          value={formData.address}
          onChange={handleChange}
        />

        {/* <label htmlFor="price">Price:</label> */}
        <input
          type="number"
          name="price"
          className="number"
          placeholder="Price: 10.0"
          value={formData.price}
          onChange={handleChange}
        />

        {/* <label htmlFor="image">Image URL:</label> */}
        <input
          type="text"
          name="image"
          className="text"
          placeholder="Image URL:"
          value={formData.image}
          onChange={handleChange}
          required
        />

        {/* <label htmlFor="discount">Discount:</label> */}
        <input
          type="number"
          name="discount"
          className="number"
          placeholder="Discount: 10.0"
          value={formData.discount}
          onChange={handleChange}
        />

        {/* <label htmlFor="category">Category:</label> */}
        <input
          type="text"
          name="category"
          className="text"
          placeholder="Category:"
          value={formData.category}
          onChange={handleChange}
          required
        />

        {/* You can hide user_id; set it dynamically using logged-in user; */}
        {/* type="hidden"; value={loggedInUserId} */}
        {/* <label htmlFor="user_id">User Id:</label> */}
        <input
          type="number"
          name="user_id"
          className="number2"
          value={formData.user_id}
          onChange={handleChange}
          required
        />

        {/* Success and error messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="new-space-btn">Create Coworking Space</button>
      </form>
    </div>
  );
};

export default NewSpaceCwForm;
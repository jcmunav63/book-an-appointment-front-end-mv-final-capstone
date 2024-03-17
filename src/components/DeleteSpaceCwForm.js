import React, { useState } from 'react';
import axios from 'axios';

const DeleteSpaceCwForm = () => {
  const [formData, setFormData] = useState({
    space_cw_id: '',
    user_id: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const delUrl = `http://localhost:3001/api/v1/users/${formData.user_id}/space_cws/${formData.space_cw_id}`;
      await axios.delete(delUrl);
      setSuccessMessage('Coworking space was deleted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // 5 seconds
    } catch (error) {
      setErrorMessage('Error deleting the coworking space. Please try again later.');
      setTimeout(() => {
        setErrorMessage('');
      }, 8000); // 8 seconds
    }
  };

  return (
    <div>
      <h2>Delete a Coworking Space</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="number"
          name="space_cw_id"
          className="number2"
          placeholder="Space_cw_id:"
          value={formData.space_cw_id}
          onChange={handleChange}
          required
        />

        {/* type="hidden"; value={loggedInUserId} */}
        {/* <label htmlFor="user_id">User Id:</label> */}
        <input
          type="number"
          name="user_id"
          className="number2"
          placeholder="User_id:"
          value={formData.user_id}
          onChange={handleChange}
          required
        />

        {/* Success and error messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="new-space-btn">Delete Coworking Space</button>
      </form>
    </div>
  );
};

export default DeleteSpaceCwForm;
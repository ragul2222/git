import { useState } from 'react';
import useForm from './hooks/useForm';
import './Form.css';

const Form = () => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', values);
    setSubmitted(true);
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success-message">Form has been submitted successfully!</p>}
    </div>
  );
};

export default Form;

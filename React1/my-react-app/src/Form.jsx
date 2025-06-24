import { useState } from 'react';
import useForm from './hooks/useForm';

const Form = () => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
    age: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          age: values.age ? Number(values.age) : undefined
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        resetForm();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Unknown error');
      }
    } catch (error) {
      setError('Network error: ' + error.message);
    }
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: 'var(--spacing-12) 0',
        marginBottom: 'var(--spacing-12)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-6)'
        }}>
          Get In Touch
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--gray-600)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Ready to start your next project? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </section>

      {/* Contact Form */}
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: 'var(--spacing-8)',
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--gray-200)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-8)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--spacing-4)',
            fontSize: 'var(--font-size-3xl)',
            color: 'var(--white)'
          }}>
            📧
          </div>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Contact Form
          </h2>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--gray-600)'
          }}>
            We'd love to hear from you
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Full Name *
            </label>
            <input 
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email Address *
            </label>
            <input 
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password *
            </label>
            <input 
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your age"
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 'var(--spacing-4)' }}
          >
            Send Message
          </button>
        </form>
        {error && (
          <div style={{
            marginTop: 'var(--spacing-6)',
            padding: 'var(--spacing-4)',
            backgroundColor: 'var(--error-color)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            ❌ {error}
          </div>
        )}
        {submitted && (
          <div style={{
            marginTop: 'var(--spacing-6)',
            padding: 'var(--spacing-4)',
            backgroundColor: 'var(--success-color)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            ✅ Form has been submitted successfully! We'll get back to you soon.
          </div>
        )}
      </div>

      {/* Additional Contact Info */}
      <div style={{
        maxWidth: '800px',
        margin: 'var(--spacing-12) auto 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-6)'
      }}>
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-6)',
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--gray-200)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-3xl)',
            marginBottom: 'var(--spacing-3)'
          }}>
            📞
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Phone
          </h3>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--gray-600)'
          }}>
            +1 (555) 123-4567
          </p>
        </div>

        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-6)',
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--gray-200)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-3xl)',
            marginBottom: 'var(--spacing-3)'
          }}>
            📧
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Email
          </h3>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--gray-600)'
          }}>
            hello@reactapp.com
          </p>
        </div>

        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-6)',
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--gray-200)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-3xl)',
            marginBottom: 'var(--spacing-3)'
          }}>
            🏢
          </div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Office
          </h3>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--gray-600)'
          }}>
            123 Tech Street, Digital City
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;

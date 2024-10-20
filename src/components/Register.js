import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email address must be in lowercase and valid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const lowerCaseEmail = formData.email.toLowerCase();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, email: lowerCaseEmail }),
      });

      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigate('/login');
      } else {
        const errorData = await response.json();
        setErrors({ ...errors, general: errorData.message || 'Registration failed' });
        console.error('Failed to register:', errorData);
      }
    } catch (error) {
      setLoading(false);
      setErrors({ ...errors, general: 'Error during registration' });
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}

        <button type="submit" disabled={loading}>
          {loading ? (
            <div className="spinner" style={{ display: 'inline-block', width: '1em', height: '1em', border: '0.2em solid transparent', borderTop: '0.2em solid blue', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          ) : 'Register'}
        </button>
      </form>
      <p>
        Already have an account? 
        <button onClick={() => navigate('/login')} style={{ marginLeft: '5px' }}>
          Login
        </button>
      </p>
    </div>
  );
};

export default Register;

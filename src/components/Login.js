import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email address must be in lowercase and valid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return; // Stop submission if there are validation errors
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false); // Stop loading

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
        navigate('/products'); // Navigate to products page
      } else {
        const errorData = await response.json();
        setErrors({ ...errors, general: errorData.message || 'Login failed' });
        console.error('Failed to log in:', errorData);
      }
    } catch (error) {
      setLoading(false); // Stop loading
      setErrors({ ...errors, general: 'Error during login' });
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          {loading ? 'Logging in...' : 'Login'} {/* Show loading state */}
        </button>
      </form>
      <p>
        Don't have an account? 
        <button onClick={() => navigate('/register')} style={{ marginLeft: '5px' }}>
          Register Now
        </button>
      </p>
    </div>
  );
};

export default Login;

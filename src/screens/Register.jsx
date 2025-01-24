import React, { useState } from 'react';
import '../styles/Register.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirmPassword visibility
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const { register, loading } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages before form submission
    setError('');

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.country) {
      setError('All fields are required. Please fill in all the details.');
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('The passwords you entered do not match. Please check and try again.');
      return;
    }

    try {
      // Send only the country name, not the country code
      await register(formData.name, formData.email, formData.password, formData.country);
      navigate("/Login");

    } catch (err) {
      setError('We encountered an issue while creating your account. Please try again later.');
    }
  };
  const countries = [
    { name: 'Nigeria', code: '+234' },
    { name: 'South Africa', code: '+27' },
    { name: 'Egypt', code: '+20' },
    { name: 'Kenya', code: '+254' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ghana', code: '+233' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Morocco', code: '+212' },
    { name: 'Algeria', code: '+213' },
    { name: 'Angola', code: '+244' },
    { name: 'Senegal', code: '+221' },
    { name: 'Zimbabwe', code: '+263' },
    { name: 'Cote d\'Ivoire', code: '+225' },
    { name: 'Sudan', code: '+249' },
    { name: 'Rwanda', code: '+250' },
    { name: 'Malawi', code: '+265' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Mali', code: '+223' },
    { name: 'Zambia', code: '+260' },
    { name: 'Botswana', code: '+267' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Liberia', code: '+231' },
    { name: 'Namibia', code: '+264' },
    { name: 'Sierra Leone', code: '+232' },
    { name: 'Chad', code: '+235' },
    { name: 'Benin', code: '+229' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Niger', code: '+227' },
    { name: 'Togo', code: '+228' },
    { name: 'Guinea', code: '+224' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo (Brazzaville)', code: '+242' },
    { name: 'Congo (Kinshasa)', code: '+243' },
    { name: 'Gabon', code: '+241' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Gambia', code: '+220' },
    { name: 'Burundi', code: '+257' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Seychelles', code: '+248' },
    { name: 'Sao Tome and Principe', code: '+239' },
    { name: 'Somalia', code: '+252' },
    { name: 'Guinea-Bissau', code: '+245' },
    { name: 'Cape Verde', code: '+238' },
    { name: 'Eswatini', code: '+268' },
    { name: 'Mauritania', code: '+222' },
    { name: 'Libya', code: '+218' },
    { name: 'South Sudan', code: '+211' }
  ];

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Register</h1>
        <p>Create an account to get started</p>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'} // Toggle visibility
              id="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ paddingRight: '50px' }} // Space for the toggle button
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showConfirmPassword ? 'text' : 'password'} // Toggle visibility
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{ paddingRight: '50px' }} // Space for the toggle button
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select your country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
        </div>
        
        {error && (
          <div className="error-message">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}

        <button type="submit" className="register-btn" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;

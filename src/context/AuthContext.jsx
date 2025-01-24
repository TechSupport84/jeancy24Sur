import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL_API = "https://jeancy24sur-280f233049ed.herokuapp.com/api";

  const handleError = (errorData) => {
    if (errorData.message) {
      setError(errorData.message);
    } else {
      setError('An error occurred, please try again.');
    }
  };

  useEffect(() => {
    const fetchTokenAndUser = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          await fetchUserDetails(storedToken);
        } else {
          setLoading(false); // Finish loading if no token is found
        }
      } catch (err) {
        console.error('Error fetching token or user:', err);
        setError('Failed to retrieve token');
        setLoading(false); // Finish loading even on error
      }
    };

    fetchTokenAndUser();
  }, []); // Only run once on mount

  const fetchUserDetails = async (authToken) => {
    if (!authToken) return;

    setError(null); // Reset error before fetching data
    try {
      const response = await fetch(`${URL_API}/auth/me`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        const errorData = await response.json();
        setUser(null);
        handleError(errorData);
        localStorage.removeItem('token');
        setToken(null);
      }
    } catch (err) {
      console.error('Error fetching user details:', err);
      setUser(null);
      setError('Error fetching user details');
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, email, password, country, role = 'client') => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`${URL_API}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, country, role }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
  
        localStorage.setItem('token', token);
        setToken(token);
        await fetchUserDetails(token);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred during registration');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed, please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`${URL_API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
  
        localStorage.setItem('token', token);
        setToken(token);
        await fetchUserDetails(token);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid credentials');
        throw new Error(errorData.message || 'Invalid credentials'); // Throw an error to be caught by the Login component
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed, please check your credentials');
      throw err; // Ensure the error is thrown for the Login component to handle
    } finally {
      setLoading(false);
    }
  };
  

  const logout = async () => {
    setLoading(true);
    try {
      localStorage.removeItem('token');
      setToken(null);
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
      setError('Logout failed');
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async (oldPassword, newPassword) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${URL_API}/auth/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      if (response.ok) {
        setError(null); // Clear any previous errors
      } else {
        const errorData = await response.json();
        handleError(errorData);
      }
    } catch (err) {
      console.error('Password change error:', err);
      setError('Password change failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user, token, loading, error, login, logout, register, changePassword,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

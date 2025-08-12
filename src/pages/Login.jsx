
import { useState } from 'react'
import axios from "axios";
function Login(){
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // This will work once the Django backend is ready
      const res = await axios.post('http://localhost:8000/api/login/', form);
      console.log(res.data);
      // Save token if any, and redirect
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };
         return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
    </div>
    )
}
export default Login;
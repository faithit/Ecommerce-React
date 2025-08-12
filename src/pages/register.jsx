
import { useState } from 'react';
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    gender: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/register/", form);
      alert("Registration successful!");
      setForm({
        full_name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        gender: ""
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register User</h2>
      <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">


        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            className="form-control"
            placeholder="Full Name"
            required
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Phone"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            name="confirm_password"
            type="password"
            value={form.confirm_password}
            onChange={handleChange}
            className="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>


        <div className="mb-3">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === "Male"}
                onChange={handleChange}
              /> Male
            </label>
            <label className="ms-3">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === "Female"}
                onChange={handleChange}
              /> Female
            </label>
          </div>
        </div>


        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/logo.png";
import apiService from "../services/apiService";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiService.login(formData.email, formData.password);
      console.log("Login bem-sucedido:", response);
      toast.success("Login bem-sucedido!");
    } catch (error) {
      toast.error("Falha no login! Verifique suas credenciais.");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <img src={logo} alt="Agilizapp Logo" className="logo" />
        <div className="title">AGILIZAPP</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="button">
            Sign in
          </button>
          <button type="button" className="google-button">
            Sign in with Google
          </button>
        </form>
        <div className="sign-up-text">
          Don’t have an account? <a href="/signup">Sign up</a>
        </div>
        <footer className="footer">© Agilizapp v1.0 2024</footer>
      </div>
      <div className="image-container">
        <img src={logo} alt="Agilizapp Icon" className="logo-large" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginScreen;

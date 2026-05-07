import { useState } from "react";
import "./login.css";
import logo from "../../assets/images/sutslogo.png";
import DataService from "../../services/axios";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Points to: http://localhost/MAP25_Sem7/api/Auth/Login
      const response = await DataService.post("Auth/Login", {
        email: email,
        password: password,
      });

      const user = response.data;
      console.log("Login Success:", user);

      // 1. Store user data/token
      localStorage.setItem("user", JSON.stringify(user));
      // If your API returned a token, store it: 
      // localStorage.setItem("token", user.token);

      // 2. Role-based Redirection
      if (user.role === "Admin") {
        window.location.href = "/admin/manage-users";
      }else  if (user.role === "SuperAdmin") {
        window.location.href = "/superadmin/Dashboard";
      }
       else if (user.role === "Driver") {
        window.location.href = "/driver/dashboard";
      } else if(user.role === "Student"){
        window.location.href = "/student/dashboard";
      }else {
        window.location.href = "/student/dashboard";
      }

    } catch (err) {
      console.error("Login Error:", err);
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <img src={logo} alt="Smart University Transport" className="login-logo" />
        
        <h2>Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="login-error" style={{color: 'red'}}>{error}</p>}

        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
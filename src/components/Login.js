import React, {  useState} from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
const Login = ({onLogin}) => {
  const navigate = useNavigate()
  const [error,setError]=useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e){
    e.preventDefault()
    fetch('https://blogbloom-fullstack.onrender.com/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })
    .then((response) => {
      if (response.status === 201) {
        navigate('/blogs');
      }else{
        setError("Incorrect email or password. Please try again.");
      } 
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Don't have an account? <Link to="/registration" className="registration-link">Register here</Link>
      </p>
    </div>
  );
  
};

export default Login;
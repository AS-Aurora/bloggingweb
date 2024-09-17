import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const handleLogin = async () => {
    const jwtToken = await authService.createJWT();
    if (jwtToken) {
      navigate("/home");
    } else {
      console.log("Login failed, could not generate JWT");
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default Login

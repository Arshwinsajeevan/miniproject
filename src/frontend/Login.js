import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import Validation from "./LoginValidation";
import axios from "axios";
import "./Mainpage"

function Login() {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const navigate=useNavigate()

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/Login',{email,password})
    .then(result=> {
      console.log(result)
      if(result.data == "Success"){
        navigate('/Mainpage')
      }
       
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className="main_div pt-4">
      <div className="form_space">
        <h3 style={{ textAlign: "center", color: "black" }}>Login</h3>
        <form action=""
          onSubmit={handleSubmit}
          className="form-space"
          style={{ marginTop: "50px" }}>
          <div className="form-group">
            <label
              htmlFor="email"
              style={{ color: "black", padding: "5px" }}
              for="email">
              EMAIL
            </label>
            <input
            required
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"></input>
          </div>
          <br></br>
          <div className="form-group">
            <label
              htmlFor="password"
              style={{ color: "black", padding: "5px" }}
              for="password">
              PASSWORD
            </label>
            <input
            required
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"></input>
          </div>
          <br></br>
          <br></br>
          <button
            style={{ marginLeft: "5%", width: "90%" }}
            type="submit"
            className="btn btn-primary">
            SIGN IN
          </button>
        </form>
        <br></br>
        <hr style={{ color: "black" }}></hr>
        <br></br>
        <Link to="/Register">
          <button
            style={{ marginLeft: "5%", width: "90%" }}
            type="submit"
            className="btn btn-outline-primary">
            Register Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

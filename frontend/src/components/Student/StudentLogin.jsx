import React,{useState,useContext,useEffect,useRef} from "react";
import {useNavigate,Navigate} from "react-router-dom"
import { Context } from "../../context/Context";
import axios from "axios"

 function StudentLogin()
   {   
    const userRef = useRef();
    const passwordRef = useRef();
    let navigate= useNavigate();
    const {user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
          });
          console.log(user);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          {user && navigate("/profile")}
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      };
      console.log(user);
        return (
          

            <form className="form-group" onSubmit={handleSubmit}>

                <h3 className="form-group">Log in </h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" name="username" ref={userRef}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" ref={passwordRef}  />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
               
            </form>
           
        );
    }
export default StudentLogin;

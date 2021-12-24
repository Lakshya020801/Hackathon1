import React,{useState,useContext,useEffect} from "react";
import {useNavigate,Navigate} from "react-router-dom"


 function Login()
   {   
      
      
    const navigate=useNavigate();
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [Error,setError]=useState("")
    
   
    const handleChange = (e) => {
     
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    
    };
  
   
 
    const  handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    setFormValues(initialValues); 
      };
        return (
            <form>

                <h3>Log in </h3>
                {{Error} ? (
                <div style={{color:"red"}}>
                {Error}
                </div>):null
                }
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={formValues.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={formValues.password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={handleSubmit} type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
               
            </form>
        );
    }
export default Login;

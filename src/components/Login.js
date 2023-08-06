import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Appstate } from '../App';



 function Login() {

    const navigate = useNavigate();
    const appdata = useContext(Appstate);
  
    const [state, setState] = useState({
        name:"",
        password:""
    })

 function login(){
    
        if(state.name === "" || state.password === "")
        {
            alert('Fill Correct Form')
        } 
        else
        {
        // console.warn(state)
        fetch("http://localhost:3000/login").then((data)=>{
            data.json().then((resp)=>{
                // console.warn("resp",resp)
               for(let i=0;i<resp.length;i++)
               {
                if(resp[i].name === state.name && resp[i].password === state.password)
                {
                    alert("Login Successfully")
                    appdata.setLogin(true);
                    setState({name:"",password:""})
                    navigate('/')
                }
                
              
               }
            })
        })
    }
    }

    function signout()
    {
        appdata.setLogin(false)
        alert("signout")
    }

        return (
            <div className='login'>
            <div className='login-box'>
                <input  type="text" placeholder="Enter Name" value={state.name} onChange={(event)=>setState({...state,name:event.target.value})}/>
                <input  type="password" placeholder="Enter password" value={state.password} onChange={(event)=>setState({...state,password:event.target.value})}/>
               {appdata.login ?  
                  <> <button  onClick={signout} >Logout</button> </> :<> <button  onClick={login} >Login</button> </>
            }
                <span>You dont have account.<Link to={"/Signup"}>SignUp</Link></span>
            </div>
            </div>
        );

        }  
     

export default Login;
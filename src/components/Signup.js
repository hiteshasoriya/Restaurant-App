import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const Navigate = useNavigate();

    const [state, setState] = useState({
        name: "",
        password: ""
    })
    
    function Signup() {
        if(state.name !== "" && state.password !=="" ) 
        {
        let data = state
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data),
        }).then((res) => {
            res.json().then((resp) => {
                alert("Sucessfully SignUp")
                Navigate('/Login')
            })
        })
    }
        else{alert("Fill the Form!")}
    }



    return (
        <div className='login'>
            <div className='login-box'>
                <input type="text" placeholder="Enter Name" value={state.name} onChange={(event) => setState({ ...state, name: event.target.value })} />
                <input type="password" placeholder="Enter password" value={state.password} onChange={(event) => setState({ ...state, password: event.target.value })} />
                <button onClick={Signup}>SignUp</button>
            </div>
        </div>
    )
}

export default Signup
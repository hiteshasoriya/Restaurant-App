
import {  useContext, useState } from 'react';
import { Container} from 'react-bootstrap'
import { Appstate } from '../App';
import { useNavigate } from 'react-router-dom';



function RestaurantCreate() {

    const appdata = useContext(Appstate);
    const navigate = useNavigate();

    const [state , setState] = useState({
                name:null,
                email:null,
                rating:null,
                address:null
            })

     
        //  const [name, setName] = useState("");
        //  const [email, setEmail] = useState("");
        //  const [rating, setRating] = useState("");
        //  const [address, setAddress] = useState("");
            
            
            function create(){
                if(appdata.login){
                // let data = {name,email,rating,address}
                let data = state
                console.log(data)
                fetch("http://localhost:3000/restaurant",{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(data),
                }).then((res)=>{
                    res.json().then((resp)=>{

                        alert("added sucessfully")
                    })
                })
            }
            else{navigate('/Login')}
            }


        return (
                <div className='maincreate'>
            <Container className='createcon'>  
                <h1>RestaurantCreate</h1>
                <div className='createinp'>
                    {/* <input value={name} onChange={(event)=> setName(event.target.value)} placeholder="Restaurant Name" /><br /><br /> */}
                    {/* <input value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Restaurant Email" /><br /><br /> */}
                    {/* <input value={rating} onChange={(event)=>setRating(event.target.value)}  placeholder="Restaurant Rating" /><br /><br /> */}
                    {/* <input value={address} onChange={(event)=>setAddress(event.target.value)}  placeholder="Restaurant Address" /><br /><br /> */}
                    <input value={state.name} onChange={(event)=>{setState({...state,name:event.target.value})}}  placeholder="Restaurant Name" /><br /><br />
                    <input value={state.email} onChange={(event)=>{setState({...state,email:event.target.value})}}  placeholder="Restaurant Email" /><br /><br />
                    <input value={state.rating} onChange={(event)=>{setState({...state,rating:event.target.value})}}  placeholder="Restaurant Rating" /><br /><br />
                    <input value={state.address} onChange={(event)=>{setState({...state,address:event.target.value})}}  placeholder="Restaurant Address" /><br /><br />
                 <button onClick={create}>Add Restaurant</button>
                </div>
            </Container>
            </div>
        );
}

export default RestaurantCreate;
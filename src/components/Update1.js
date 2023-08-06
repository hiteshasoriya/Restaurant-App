import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Container} from 'react-bootstrap'
import { Appstate } from "../App";

const Update1 = () => {
    const { id } = useParams();
    const appdata = useContext(Appstate)
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name:"",
        mail:"",
        rating:0,
        address:""
    })

useEffect(()=>{
    async function getData(){
        const get = await fetch(`http://localhost:3000/restaurant/${id}`)
        const res = await get.json();
        setValues(res)
    }
    getData();
},[ ])

function update(){
    if(appdata.login){
    
        fetch('http://localhost:3000/restaurant/'+id,
        {
            method: "PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been Updated")
               
            })
        })
    }
    else{navigate('/Login')}

}
 
    return ( 
    
    <div className='maincreate'>
    <Container className='createcon'>  
        <h1>Restaurant Update</h1>
        <div className='createinp'>
            <input value={values.name} onChange={e => setValues({...values, name: e.target.value})}  placeholder="Restaurant Name" /><br /><br />
            <input value={values.email} onChange={e => setValues({...values, email: e.target.value})}  placeholder="Restaurant Email" /><br /><br />
            <input value={values.rating} onChange={e => setValues({...values, rating: e.target.value})}  placeholder="Restaurant Rating" /><br /><br />
            <input value={values.address} onChange={e => setValues({...values, address: e.target.value})}  placeholder="Restaurant Address" /><br /><br />
         <button onClick={update}>Update Restaurant</button>
        </div>
    </Container>
    </div>
    )
}

export default Update1
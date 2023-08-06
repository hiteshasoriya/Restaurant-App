import React, { useContext, useEffect, useState } from 'react'
import { Table, Form, Container } from 'react-bootstrap'
import {
    Link, useNavigate
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Appstate } from '../App'

const Search = () => {

    const [state, setState] = useState("")
    const [form, setForm] = useState([]);
    const [istrue, setIstrue] = useState(false)
  const appdata = useContext(Appstate);
  const navigate = useNavigate();

    useEffect(() => {
        async function getdata() {
            const data = await fetch("http://localhost:3000/restaurant?q=" + state)
            const get = await data.json();
            

            if (state === "") {
                setForm([])
                setIstrue(false)
            }
            else {
                setForm(get)
                setIstrue(true)
            }
          

        }
        getdata();
    })

    function remove(id) {
        if(appdata.login){
        fetch('http://localhost:3000/restaurant/'+id,
        {
            method: "DELETE",
            // headers:{
            //     'Content-Type':'application/jason'
            // },
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been deleted")
                // this.getData()
            })
        })
    }
    else{navigate('/Login')}
    }


    return (
        <Container>
            <h1>RestaurantSearch</h1>
            <Form.Control type="text" onChange={(event) => setState(event.target.value)} placeholder="Search Restaurant" />
            <div>
                {istrue ?
                    <div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Location</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        form.map((item) =>
                                            <tr>
                                                <td><th className='mobileth'>Name :</th>{item.name}</td>
                                                <td><th className='mobileth'>Email :</th>{item.email}</td>
                                                <td><th className='mobileth'>Rating :</th>{item.rating}</td>
                                                <td><th className='mobileth'>Address :</th>{item.address}</td>
                                                <td><th className='mobileth'>Operation :</th><Link to={"/update/" + item.id}>< FontAwesomeIcon className='searchedit' icon={faEdit} /></Link>
                                                    <span className='searchedit' onClick={()=> remove (item.id)} ><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                                </td>
                                            </tr>
                                        )
                    }
                            </tbody>
                        </Table>
                    </div>
                    : ""
                }
            </div>
        </Container>
    );
}

export default Search
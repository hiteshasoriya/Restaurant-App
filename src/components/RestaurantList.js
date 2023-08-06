
import { Table } from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react';
import { Appstate } from '../App';

function RestaurantList() {

    const appdata = useContext(Appstate);
    const navigate = useNavigate();
    
 function remove(id) {
    if(appdata.login)
    {
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



    const [Data,setData] = useState([]);

    useEffect(()=>{
        async function getData(){
            const get = await fetch("http://localhost:3000/restaurant");
            const result = await get.json();
            setData(result);
        }
        getData();
    })
    
 
        return (
            <div>
                    <div>
                            <h1>RestaurantList</h1>
                            <Table striped bordered hover variant="dark" >
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
                                        Data.map((item) =>
                                            <tr>
                                                
                                                {/* <td>{item.id}</td> */}
                                                <td><th className='mobileth'>Name :</th> {item.name}</td>
                                                <td><th className='mobileth'>Email :</th>{item.email}</td>
                                                <td><th className='mobileth'>Rating :</th>{item.rating}</td>
                                                <td><th className='mobileth'>Location :</th>{item.address}</td>
                                                <td><th className='mobileth'>Operation :</th><Link to={`/update/${item.id}`}><FontAwesomeIcon className='edit' icon={faEdit} /></Link>
                                                <span className='delete' onClick={()=> remove (item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td> 
                                                

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
            </div>
        );
}

export default RestaurantList;
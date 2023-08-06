import React, { Component } from 'react';

import { Table ,Form, Container} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class RestaurantSearch extends Component {
    constructor()
    {
        super()
        this.state={
            searchData:null,
            noData:false,
            lastSearch:""
        }
    }
    
    search(key)
    {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restaurant?q="+ key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})

                }
            })
        })
    }
    delete(id)
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
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            <Container>
                <h1>RestaurantSearch</h1>
                {/* <input className='deco' type="text"onChange={(event)=>this.search(event.target.value)}/> */}
                <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="Search Restaurant" />
                <div>
                    {
                    this.state.searchData?
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
                            this.state.searchData.map((item)=>
                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={"/update/" + item.id}>< FontAwesomeIcon className='searchedit' icon={faEdit} /></Link>
                                                    <span className='searchedit' onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                                </td>

                                          </tr>
                            )
                        }
                           </tbody>
                            </Table>
                    </div>
                    :" "
                } 
                {
                    this.state.noData?<h3>NO DATA FOUND</h3>:null
                }
                </div>
            </Container>
        );
    }
}

export default RestaurantSearch;
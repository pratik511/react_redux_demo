import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddContact = (props) => {
    const [state, setState] = useState({id: uuidv4(),name:"",email:""})
    const navigate = useNavigate();
    const add = e =>{
        e.preventDefault();
        if (state.name ==="" && state.email ==="") {
            alert("All the fields are mandatory!");
            return
        }

        props.addContactHandler(state);
        setState({name:"",email:""})
        navigate('/')
    }

    return (
    <div className='ui main'>
        <h2 style={{marginTop:"55px"}}>Add Contact</h2>
        <form className='ui form' onSubmit={add} >
        {/* <div className='ui form'> */}
            <div className='field'>
                <label>Name</label>
                <input type='text' name="name" placeholder='Name' value={state.name} onChange={(e) => setState({...state ,name:e.target.value})} />
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='email' name="email" placeholder='Email' value={state.email} onChange={(e) => setState({...state ,email:e.target.value})} />
            </div>
            <button className='ui button blue'>Add</button>
        {/* </div> */}
        </form>
    </div>
  )
}

export default AddContact
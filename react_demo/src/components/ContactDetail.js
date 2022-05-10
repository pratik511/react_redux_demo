import React, { useEffect, useState } from 'react'
import {  useParams  } from 'react-router-dom';
import user from '../images/pratik.jpeg'

const ContactDetail = (props) => {
    const LOCAL_STORAGE_KEY = "contacts";
    const [data, setData] = useState([]);
    const param = useParams()
    const userId = param.id 
    
    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts?.length > 0) {
            const record =retriveContacts.find(e=> e.id === userId);
                if (record) {
                    setData(record);
                }
                else{
                    console.log("error");
                }
        }
    }, [])
    
    return (
    <div className='main' style={{marginTop:"55px"}}>
        <div className='ui card centered'>
            <div className='image'>
                <img src={user} alt='user' />
            </div>
            <div className='content'>
                <div className='header'>{data.name}</div>
                <div className='description'>{data.email}</div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetail
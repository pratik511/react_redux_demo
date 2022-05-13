import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import user from "../images/pratik.jpeg";
import api from "../api/contact"

const ContactDetail = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [data, setData] = useState([]);
  const param = useParams();
  const userId = param.id;

    //api
    const retrieveContacts = async () =>{
      const response = await api.get("/contacts");
      console.log("response",response);
      return response.data;
    };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const getAllContact = async () =>{
      const allContact = await retrieveContacts();
      if (allContact?.length >0) {
        const record = allContact.find((e) => e.id === userId)
        console.log("recordrecord",record);
        if (record) {
          setData(record);
        }
        else{
          console.log("error");
        }
      }
    }

    getAllContact();

    // if (retriveContacts?.length > 0) {
    //   const record = retriveContacts.find((e) => e.id === userId);
    //   if (record) {
    //     setData(record);
    //   } else {
    //     console.log("error");
    //   }
    // }
  }, []);

  return (
    <div className="main" style={{ marginTop: "55px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{data.name}</div>
          <div className="description">{data.email}</div>
        </div>
      </div>
      <div
        className="center-div"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="/">
          <button className="ui button blue center">Back To Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;

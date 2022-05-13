import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import api from "./api/contact"
import EditContact from "./components/EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //api
  const retrieveContacts = async () =>{
    const response = await api.get("/contacts");
    console.log("response",response);
    return response.data;
  };


  const addContactHandler = async (contact) => {
    console.log("contactcontactcontactcontact",contact);
    let dummdata = {...contact};
    // contacts.push(dummdata);
    const response = await api.post("/contacts",dummdata)
    setContacts([...contacts,response.data]);
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dummdata));
  };

  const updateContactHandler =async (contact) =>{
      const response = await api.put(`/contacts/${contact}`,contact);
      console.log("responseresponse",response.data);
  }

  const removeContactHandler =async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllContact = async () =>{
      const allContact = await retrieveContacts();
      if (allContact) {
        setContacts(allContact);
      }
    }

    getAllContact();
  }, []);

  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler}/>} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          {/* <AddContact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

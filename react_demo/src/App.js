import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
console.log("contactscontacts",contacts);
  const addContactHandler = (contact) => {
    console.log(contact);
    let dummdata = [...contacts, contact];
    contacts.push(dummdata);
    setContacts(dummdata);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dummdata));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          {/* <Route path="/" element={<ContactList />} /> */}
          {/* <AddContact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

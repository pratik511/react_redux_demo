import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteConactHandler} key={contact.id} />;
  });
  return (
    <div className="main" style={{ marginTop: "55px" }}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2>Contact List</h2>
        <Link to="/add">
        <button className="ui button blue">Add Contact</button>
        </Link>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;

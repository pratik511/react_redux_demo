import React from "react";
import { Link } from "react-router-dom";
import user from "../images/pratik.jpeg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={`/contact/${id}`}>
          <div style={{ display: "flex" }}>
            <img
              className="ui avatar image"
              src={user}
              alt="user"
              style={{ marginRight: "0.5em" }}
            />
            <div className="content">
              <div className="header">{name}</div>
              <div>{email}</div>
            </div>
          </div>
        </Link>
        <div>
          <Link to={`/edit`}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue" , margin:"10px 15px" }}
            // onClick={() => props.clickHandler(id)}
          ></i>
           </Link>
          <i
            className="trash alternate outline icon"
            style={{ marginTop: "10px", color: "red" }}
            onClick={() => props.clickHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

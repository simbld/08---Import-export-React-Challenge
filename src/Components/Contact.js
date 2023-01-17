import React from 'react';

const Contact = ({ name, email, phone, isDeletable }) => {
  return (
    <div className="friend-item">
      <h3 className="item">{name}</h3>
      <h4 className="item">{email}</h4>
      <h4 className="item">{phone}</h4>
      <>
        {isDeletable ? (
          <button className="friend-button ">Delete</button>
        ) : null}
      </>
    </div>
  );
};

export default Contact;

import React from 'react';

const Contact = ({ name, email, phone, isDeletable }) => {
  return (
    <div className="friend-item">
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <>{isDeletable ? <button>Delete</button> : null}</>
    </div>
  );
};

export default Contact;

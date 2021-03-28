import React, { Fragment } from 'react';
import fireDb from '../firebase';
import ContactForm from './ContactForm';

const Contacts = () => {
  const addOrEdit = (obj) => {
    // Add a new contact.
    fireDb.child('contacts').push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4 text-center'>Contact Register</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
          <ContactForm addOrEdit={addOrEdit} />
        </div>
        <div className='col-md-7'>
          <div>List of contacts</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

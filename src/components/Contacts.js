import React, { Fragment } from 'react';
import ContactForm from './ContactForm';

const Contacts = () => {
  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4 text-center'>Contact Register</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
          <ContactForm />
        </div>
        <div className='col-md-7'>
          <div>List of contacts</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

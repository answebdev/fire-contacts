import React, { Fragment, useState, useEffect } from 'react';
import fireDb from '../firebase';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [contactObjects, setContactObjects] = useState({}); // Could also be set to empty array

  // This is needed in order for us to display the data in the browser (see below in 'return')
  useEffect(() => {
    // Retrieve information from the database.
    fireDb.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    // Add a new contact.
    fireDb.child('contacts').push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log('Contact added');
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
          <table className='table table-borderless table-stripped'>
            <thead className='thead-light'>
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Emile</th>
                {/* <th>Address</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                // If we had an array (see above where 'useState' is defined), we could directly call the 'map' method to loop through the data.
                // But since we're using an object, do this (here, the unique will be the
                // unique identifier - the id - that is created in Firebase for each contact):
                Object.keys(contactObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{contactObjects[id].fullName}</td>
                      <td>{contactObjects[id].mobile}</td>
                      <td>{contactObjects[id].email}</td>
                      {/* <td>{contactObjects[id].address}</td> */}
                      <td></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;

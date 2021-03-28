import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
  const intialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
  };

  const [values, setValues] = useState(intialFieldValues);

  // This logic populates the form when cicking on Edit so we can edit the information.
  useEffect(() => {
    if (props.currentId === '')
      setValues({
        ...intialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  // Set 'autoComplete' to 'off' in order to prevent from showing previously posted form data.
  return (
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='form-group input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'>
            <i className='fas fa-user'></i>
          </div>
        </div>
        {/* Set 'value' to the corresponding 'values' state property above: */}
        <input
          className='form-control'
          placeholder='Full Name'
          name='fullName'
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-row'>
        <div className='form-group input-group col-md-6'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <i className='fas fa-mobile-alt'></i>
            </div>
          </div>
          <input
            className='form-control'
            placeholder='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group input-group col-md-6'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <i className='fas fa-envelope'></i>
            </div>
          </div>
          <input
            className='form-control'
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group'>
        <textarea
          className='form-control'
          placeholder='Address'
          name='address'
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-control'>
        <input
          type='submit'
          value={props.currentId === '' ? 'Save' : 'Update'}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;

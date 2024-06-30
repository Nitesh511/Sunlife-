import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const onSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const validateForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }

  return errors;
};

const ContactForm = () => (
  <div className="bg-blue-100 min-h-screen flex items-center justify-center lg:-mt-60">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full lg:-mt-32">
      <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
      <p className="text-center text-gray-600 mb-6">We will get back to you asap!</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <PersonIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-gray-300 p-2 pl-10 w-full rounded-md"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="relative">
                <PersonIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-gray-300 p-2 pl-10 w-full rounded-md"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
              </div>
            </div>
            <div className="relative">
              <EmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 p-2 pl-10 w-full rounded-md"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="border border-gray-300 p-2 pl-10 w-full rounded-md"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded-md w-full hover:bg-blue-800"
                disabled={isSubmitting}
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className="text-center text-gray-600 mt-4">You may also call us at 333-33-33</p>
    </div>
  </div>
);

export default ContactForm;
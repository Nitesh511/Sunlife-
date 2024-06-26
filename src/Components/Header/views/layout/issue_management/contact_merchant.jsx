import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  email: '',
  message: '',
};

const onSubmit = (values, actions) => {
  // Handle form submission logic here, like sending data to server or processing
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

  if (!values.contactNumber) {
    errors.contactNumber = 'Required';
  } else if (!/^\d+$/.test(values.contactNumber)) {
    errors.contactNumber = 'Invalid phone number';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
};

const MoreInfoForm = () => (
  <div className="bg-blue-500 text-white py-12 -mt-40">
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">For More Info</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-lg text-white">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border border-gray-300 p-2 w-full"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg text-white">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border border-gray-300 p-2 w-full"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-lg text-white">
                Contact Number
              </label>
              <Field
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="border border-gray-300 p-2 w-full"
              />
              <ErrorMessage name="contactNumber" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-white">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 p-2 w-full"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-white">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="border border-gray-300 p-2 w-full"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <div className="text-center text-base font-bold">
              <button
                type="submit"
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-green-600 hover:text-white"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default MoreInfoForm;

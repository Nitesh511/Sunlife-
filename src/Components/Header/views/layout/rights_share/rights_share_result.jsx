import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Company from "../../../../.././assets/company.jpg";



const validationSchema = Yup.object().shape({
    company: Yup.string().required('Please select a company'),
    boid: Yup.string().required('Please select'),
  
  });

const Rights_ShareResult = () => {
    const initialValues = {
        company: '',
        boid: '',
      
    }
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        // Handle form submission here
        setSubmitting(false);
      };
  return (
    <div>
      <div className="relative h-96 bg-gray-300 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${Company})`,
            transform: "scale(1.1)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex flex-col justify-between p-32 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h1 className="text-4xl font-bold">IPO Results</h1>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-red-500 p-8 mb-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-20 relative z-10">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">IPO Result</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white mb-2">Choose Company</label>
                  <Field as="select" id="company" name="company" className="w-full p-2 rounded">
                    <option value="">Select a Company</option>
                    <option value="Company1">Hydro Power</option>
                    <option value="Company2">Company 2</option>
                    <option value="Company3">Company 3</option>
                  </Field>
                  <ErrorMessage name="company" component="div" className="text-red-200 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="boid" className="block text-white mb-2">Search Using</label>
                  <Field as="select" id="companys" name="companys" className="w-full p-2 rounded">
                    <option value="">Select a Company</option>
                    <option value="Company1">BOID</option>
                    <option value="Company2">Shareholder Name</option>
                    <option value="Company3">Company 3</option>
                  </Field>
                  <ErrorMessage name="boid" component="div" className="text-red-200 text-sm mt-1" />
                </div>
               
              </div>
              <div className="flex justify-end mt-6 space-x-4">
                <button type="button" onClick={() => resetForm()} className="bg-white text-blue-500 px-4 py-2 rounded">
                  RESET →
                </button>
                <button type="submit" disabled={isSubmitting} className="bg-white text-blue-500 px-4 py-2 rounded">
                  CHECK →
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Rights_ShareResult

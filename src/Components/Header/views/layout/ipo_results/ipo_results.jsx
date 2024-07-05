import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Company from "../../../../../assets/company.jpg";

const validationSchema = Yup.object().shape({
  company: Yup.string().required('Please select a company'),
  boid: Yup.string().required('BOID is required').matches(/^\d{16}$/, 'BOID must be 16 digits')
});

const Ipo_results = () => {
  const initialValues = {
    company: '',
    boid: ''
  };

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
        <div className="absolute inset-0 flex items-center justify-center py-20">
          <div className="text-center text-white p-8 mt-24  ">
            <h1 className="text-4xl font-bold">IPO Results</h1>
          </div>
        </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-red-500 p-8 mb-10  rounded-lg shadow-lg max-w-3xl mx-auto mt-20 relative z-10">
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
                    <option>MLBS</option>
                  </Field>
                  <ErrorMessage name="company" component="div" className="text-red-200 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="boid" className="block text-white mb-2">BOID (16-digits) / Shareholder</label>
                  <Field type="text" id="boid" name="boid" placeholder="16-digits BOID / Shareholder" className="w-full p-2 rounded" />
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
  );
}

export default Ipo_results;
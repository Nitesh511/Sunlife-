import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PMSForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
    panNo: '',
    occupation: '',
    expectedInvestmentAmount: '',
    preferredModeOfInvestment: '',
    riskAppetite: '',
    expectedReturn: '',
    investmentObjective: '',
    preferredServices: '',
    availableDiscretionaries: '',
    investedInSecondaryMarket: '',
    livingInNepal: '',
    residentialStatus: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    emailAddress: Yup.string().email('Invalid email format').required('Email Address is required'),
    panNo: Yup.string().required('PAN Number is required'),
    occupation: Yup.string().required('Occupation is required'),
    expectedInvestmentAmount: Yup.number().required('Expected Investment Amount is required'),
    preferredModeOfInvestment: Yup.string().required('Preferred Mode of Investment is required'),
    riskAppetite: Yup.string().required('Risk Appetite is required'),
    expectedReturn: Yup.string().required('Expected Return is required'),
    investmentObjective: Yup.string().required('Investment Objective is required'),
    preferredServices: Yup.string().required('Preferred Services is required'),
    availableDiscretionaries: Yup.string().required('Available Discretionaries is required'),
    investedInSecondaryMarket: Yup.string().required('Invested in Secondary Market is required'),
    livingInNepal: Yup.string().required('Living in Nepal is required'),
    residentialStatus: Yup.string().required('Residential Status is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 to-red-500 p-8 max-w-2xl mx-auto  mt-0 py-24 mb-14">
      <h2 className="text-white text-2xl mb-0 mt-28">PMS Form Online Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-6 mt-0">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="firstName" className="w-full p-3 border border-blue-300" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="lastName" className="w-full p-3 border border-blue-300" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="contactNumber" className="w-full p-3 border border-blue-300" placeholder="Contact Number" />
              <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="emailAddress" className="w-full p-3 border border-blue-300" placeholder="Email Address" />
              <ErrorMessage name="emailAddress" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="panNo" className="w-full p-3 border border-blue-300" placeholder="PAN NO" />
              <ErrorMessage name="panNo" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="occupation" className="w-full p-3 border border-blue-300" placeholder="Occupation" />
              <ErrorMessage name="occupation" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="expectedInvestmentAmount" className="w-full p-3 border border-blue-300" placeholder="Expected Investment Amount" />
              <ErrorMessage name="expectedInvestmentAmount" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="preferredModeOfInvestment" className="w-full p-3 border border-blue-300" placeholder="Preferred Mode of Investment" />
              <ErrorMessage name="preferredModeOfInvestment" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="riskAppetite" className="w-full p-3 border border-blue-300" placeholder="Risk Appetite" />
              <ErrorMessage name="riskAppetite" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="expectedReturn" className="w-full p-3 border border-blue-300" placeholder="Expected Return" />
              <ErrorMessage name="expectedReturn" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="investmentObjective" className="w-full p-3 border border-blue-300" placeholder="Investment Objective" />
              <ErrorMessage name="investmentObjective" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="preferredServices" className="w-full p-3 border border-blue-300" placeholder="Preferred Services" />
              <ErrorMessage name="preferredServices" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="availableDiscretionaries" className="w-full p-3 border border-blue-300" placeholder="Available Discretionaries" />
              <ErrorMessage name="availableDiscretionaries" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="investedInSecondaryMarket" className="w-full p-3 border border-blue-300" placeholder="Invested in Secondary Market" />
              <ErrorMessage name="investedInSecondaryMarket" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field name="livingInNepal" className="w-full p-3 border border-blue-300" placeholder="Living in Nepal" />
              <ErrorMessage name="livingInNepal" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field name="residentialStatus" className="w-full p-3 border border-blue-300" placeholder="Residential Status" />
              <ErrorMessage name="residentialStatus" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <button type="submit" className="bg-white text-blue-500 px-4 py-2 mt-4 w-full">
            SUBMIT
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PMSForm;
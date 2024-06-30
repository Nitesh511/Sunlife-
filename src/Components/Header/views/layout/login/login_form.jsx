import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import dashboard from "../../../../../assets/dashboard.png";
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side with shoe image */}
      <div className="md:w-1/2 h-full bg-gradient-to-b from-blue-600 to-red-500 relative flex items-center justify-center mt-32 lg:mt-40 lg:ml-32 lg:mb-14">
        <img src={dashboard} alt="Nike Shoe" className="w-full h-auto md:h-full object-cover" />
      </div>
      
      {/* Right side with login form */}
      <div className="md:w-1/2 bg-white flex items-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-8">Login</h1>
  
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="userName" className="block text-lg font-bold text-black">
                    User Name
                  </label>
                  <div className="relative">
                    <Field
                      name="userName"
                      type="text"
                      placeholder="Username"
                      className="w-full p-2 pl-10 border-b-2 border-gray-300 focus:border-purple-500 outline-none"
                    />
                    <PersonIcon className="absolute left-2 top-2 text-gray-500" />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  ) : null}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-lg font-bold text-black">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full p-2 pl-10 border-b-2 border-gray-300 focus:border-purple-500 outline-none"
                    />
                    <VpnKeyIcon className="absolute left-2 top-2 text-gray-500" />
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  ) : null}
                </div>
                
                <div className="flex justify-between items-center">
                  <a href="#" className="text-red-500 text-lg">Forgot Password?</a>
                  <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-bold">LOGIN</button>
                </div>
              </Form>
            )}
          </Formik>
        
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

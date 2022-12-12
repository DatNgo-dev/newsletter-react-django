import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignUpPage = () => {
  const [agree, setAgree] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
  });

  const { first_name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChecked = (e) => setAgree(e.target.checked);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full grid place-content-center">
      <h1 className="mb-5 text-md md:text-xl lg:text-3xl 2xl:text-4xl font-bold">Sign up to our free subscription for staying in the know!</h1>
      <form className="w-full" onSubmit={(e) => onSubmit(e)}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="first_name"
            onChange={(e) => onChange(e)}
            value={first_name}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div className="mb-5">
          <input
            type="checkbox"
            name="agree"
            onChange={(e) => onChecked(e)}
            value={agree}
            required
          />
          <label htmlFor="agree" className="ml-1">
            I agree to the Privacy Policy and Terms and Conditions
          </label>
        </div>

        <button className="button">Subscribe</button>
      </form>
      <Link to="/" className="btn-red">Return</Link>
    </div>
  );
};

export default SignUpPage;

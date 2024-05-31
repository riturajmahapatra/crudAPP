import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function Add() {
  const navigate = useNavigate();
  const userVal = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };

  const [inputValue, setInputValue] = useState(userVal);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://crud-app-server-gray.vercel.app/api/create',
        inputValue
      );
      console.log(response);
      toast.success(response.data.msg, {
        position: 'top-right',
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Link to="/" className="text-2xl p-3">
        <i className="ri-corner-up-left-line"></i>Back
      </Link>
      <form className="w-full max-w-sm mx-auto" onSubmit={submitHandler}>
        <h1 className="font-semibold text-2xl underline mb-4 text-red-300">
          Add User
        </h1>
        <div className="mb-6">
          <label
            htmlFor="fname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            onChange={inputHandler}
            required
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your first name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="lname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            onChange={inputHandler}
            type="text"
            id="lname"
            required
            name="lname"
            placeholder="Enter your last name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address:
          </label>
          <input
            onChange={inputHandler}
            type="email"
            id="email"
            required
            name="email"
            placeholder="Enter your email address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            onChange={inputHandler}
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

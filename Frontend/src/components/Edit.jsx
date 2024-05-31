import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Edit = () => {
  const navigate = useNavigate();
  const users = {
    fname: '',
    lname: '',
    email: '',
  };
  const [user, setUser] = useState(users);
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const editData = async () => {
    const response = await axios.get(
      `https://crud-app-server-gray.vercel.app/api/getone/${id}`
    );
    console.log(response);
    setUser(response.data);
  };

  useEffect(() => {
    editData();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://crud-app-server-gray.vercel.app/api/update/${id}`, user)
      .then((response) => {
        toast.success(response.data.msg, { position: 'top-right' });
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Link to="/" className="text-2xl p-3">
        <i className="ri-corner-up-left-line"></i>Back
      </Link>
      <form className="w-full max-w-sm mx-auto" onSubmit={submitForm}>
        <h1 className="font-semibold text-2xl underline mb-4 text-teal-300">
          Update User
        </h1>
        <div className="mb-6">
          <label
            htmlFor="fname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="fname"
            onChange={inputHandler}
            value={user.fname}
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
            type="text"
            id="lname"
            onChange={inputHandler}
            value={user.lname}
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
            type="email"
            id="email"
            onChange={inputHandler}
            value={user.email}
            name="email"
            placeholder="Enter your email address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

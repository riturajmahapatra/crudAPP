import { Link } from 'react-router-dom';

export const Edit = () => {
  return (
    <div>
      <Link to="/" className="text-2xl p-3">
        <i className="ri-corner-up-left-line"></i>Back
      </Link>
      <form className="w-full max-w-sm mx-auto">
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

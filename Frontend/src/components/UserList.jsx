import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/api/getall');
    console.log(response);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete/${userId}`
      );
      fetchData();
      toast.success(response.data.msg, { position: 'top-right' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contianer max-w-[1200px] mt-16 text-left grid m-auto mb-5">
      <Link to="/add" className="text-2xl font-bold underline">
        Add User
      </Link>
      <table className="table-auto border border-gray-300 rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
              S.No
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {user.fname} {user.lname}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  {user.email}
                </td>
                <td className="border  border-gray-300 px-4 py-2 text-left flex gap-4 ">
                  <button
                    title="Delete User"
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700 "
                    onClick={() => deleteUser(user._id)}
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                  <button
                    title="Edit User"
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    <Link to={'/edit/' + user._id}>
                      <i className="ri-edit-box-line"></i>
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

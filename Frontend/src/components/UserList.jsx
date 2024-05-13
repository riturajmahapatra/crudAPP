import { Link } from 'react-router-dom';
export default function UserList() {
  return (
    <div className="contianer max-w-[1200px] mt-16 text-left grid m-auto">
      <Link to="/user" className="text-2xl font-bold underline">
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
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-left">1</td>
            <td className="border border-gray-300 px-4 py-2 text-left">
              Rituraj Mahapatra
            </td>
            <td className="border border-gray-300 px-4 py-2 text-left">
              rituraj@gmail.com
            </td>
            <td className="border border-gray-300 px-4 py-2 text-left">
              <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700">
                Delete
              </button>
              <a
                href="/user"
                className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white-800 text-black p-4">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-slate-500 hover:text-blue-700"
        >
          Inventory Management
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/login"
              className="flex items-center text-lg hover:text-blue-400"
            >
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex items-center text-lg hover:text-blue-400"
            >
              <FaUser className="mr-2" /> Register
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center text-lg hover:text-blue-400"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

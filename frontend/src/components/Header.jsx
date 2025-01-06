import { FaSignInAlt, FaSignOutAlt, FaUser, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Destructure user from auth state

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="bg-white text-black p-4">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-slate-500 hover:text-blue-700"
        >
          Inventory Management
        </Link>

        <ul className="flex space-x-6">
          {user ? (
            <>
              <li>
                <button
                  className="flex items-center text-lg hover:text-blue-400"
                  onClick={onLogout}
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </li>
              {/* Add Item Link */}
              <li>
                <Link
                  to="/add-item"
                  className="flex items-center text-lg hover:text-blue-400"
                >
                  <FaPlus className="mr-2" /> Add Item
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;

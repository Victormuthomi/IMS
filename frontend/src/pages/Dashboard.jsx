import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemForm from "./ItemForm";
import Spinner from "../components/Spinner";
import { getItems, reset } from "../features/items/itemSlice";
import { logout as logoutAction } from "../features/auth/authSlice";
import Item from "../components/item";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.items);

  // Logout handler
  const handleLogout = () => {
    dispatch(logoutAction()); // Dispatch logout action
    navigate("/login"); // Redirect to login page after logout
  };

  useEffect(() => {
    if (isError) {
      console.log("Error:", message);
    }

    if (!user) {
      navigate("/login"); // Redirect if no user is found
    } else {
      dispatch(getItems()); // Fetch items if user is logged in
    }

    return () => {
      dispatch(reset()); // Reset items state on component unmount
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
        {/* Hero Section */}
        <section className="bg-white shadow-lg rounded-lg p-12 w-full mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome{" "}
            {user && user.name
              ? `${user.name.charAt(0).toUpperCase()}${user.name
                  .slice(1)
                  .toLowerCase()}`
              : "User"}{" "}
            to Your Inventory Management Dashboard!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Manage your items effortlessly with our intuitive platform.
          </p>
          <Link
            to="/add-item"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold text-lg shadow-lg"
          >
            Get Started
          </Link>
        </section>
        <Item />

        {/* Button to Add Item */}
        <div className="flex justify-center w-full mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => navigate("/add-item")}
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

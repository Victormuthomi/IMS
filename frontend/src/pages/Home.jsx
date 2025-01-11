import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemForm from "./ItemForm";
import Spinner from "../components/Spinner";
import { getItems, reset } from "../features/items/itemSlice";
import { logout as logoutAction } from "../features/auth/authSlice";
import Item from '../components/item.jsx'
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import Dashboard from '../components/Dashboard.jsx'

function Home() {
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
      navigate("/"); // Redirect to homepage if not logged in
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
      {user ? (
        <>
        <Dashboard />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Hero />
      )}
    </>
  );
}

export default Home;


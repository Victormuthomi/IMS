import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice"; // Import the login action
import { useNavigate } from "react-router-dom"; // For redirecting

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate for redirect

  // Redux states
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  // Handle form input changes
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    dispatch(login(userCredentials)); // Dispatch login async thunk
  };

  // Redirect to dashboard or home page after successful login
  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect on successful login
    }
  }, [user, navigate]);

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            <FaSignInAlt className="inline-block mr-2 text-blue-600" />
            Login
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Please log in to your account
          </p>

          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {isLoading && (
              <div className="text-center text-gray-600 mb-4">
                Logging in...
              </div>
            )}

            {isError && (
              <div className="text-center text-red-500 mb-4">{message}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              disabled={isLoading} // Disable button when loading
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

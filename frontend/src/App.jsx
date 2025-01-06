import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Header from "./components/Header.jsx";
import ItemForm from "./components/ItemForm.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-item" element={<ItemForm />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

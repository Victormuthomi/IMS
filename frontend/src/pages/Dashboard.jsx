import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemForm from "../components/ItemForm";
import Spinner from "../components/Spinner";
import { getItems, reset } from "../features/items/itemSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getItems());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      {/* Welcome Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome {user && user.name}!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Inventory Management Dashboard
        </p>
      </section>

      {/* Items Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Items</h2>
        {items.length === 0 ? (
          <p className="text-gray-600">No items to display</p>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item._id} className="border-b py-4 text-gray-800">
                <div className="font-semibold text-lg">{item.name}</div>
                <div className="text-gray-600">
                  Description: {item.description}
                </div>
                <div className="text-gray-600">SKU: {item.SKU}</div>
                <div className="text-gray-600">Price: ${item.unitPrice}</div>
                <div className="text-gray-600">Quantity: {item.quantity}</div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Button to Add Item */}
      <div className="flex justify-center w-full">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

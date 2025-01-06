import axios from "axios";

const API_URL = "/api/items";

//create new item
const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, itemData, config);

  return response.data;
};


//get items
const getItems = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const itemService = {
  createItem,
  getItems,
};

export default itemService;

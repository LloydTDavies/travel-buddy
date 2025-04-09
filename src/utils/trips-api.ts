import axios from "axios";

export const getTrips = async () => {
  try {
    const response = await axios.get("http://localhost:3001/trips");
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch trips:", response.status);
      return []; // Or handle the error appropriately
    }
  } catch (error) {
    console.error("Error fetching trips:", error);
    return []; // Or handle the error appropriately
  }
};

export const getTripById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/trips/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch trips:", response.status);
      return []; // Or handle the error appropriately
    }
  } catch (error) {
    console.error("Error fetching trips:", error);
    return []; // Or handle the error appropriately
  }
};

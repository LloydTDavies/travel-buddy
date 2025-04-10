import axios from "axios";
import { Trip } from "../data/trips";

const TRIPS_ENDPOINT = `${import.meta.env.VITE_BASE_URL}/trips`;

export const getTrips = async (): Promise<Trip[]> => {
  try {
    const response = await axios.get(TRIPS_ENDPOINT);
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
/**
 *
 * @param id - ID of the trip you wish to retrieve
 * @returns
 */
export const getTripById = async (id: string): Promise<Trip | undefined> => {
  try {
    const response = await axios.get(`${TRIPS_ENDPOINT}/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch trips:", response.status);
      return undefined; // Or handle the error appropriately
    }
  } catch (error) {
    console.error("Error fetching trips:", error);
    return undefined; // Or handle the error appropriately
  }
};

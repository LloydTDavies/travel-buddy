import axios from 'axios';
import { CheckList, Item } from '../data/checklist';

const CHECKLIST_ENDPOINT = `${import.meta.env.VITE_BASE_URL}/checklist`;

export const getCheckList = async (): Promise<CheckList | undefined> => {
  try {
    const response = await axios.get<CheckList>(CHECKLIST_ENDPOINT);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Failed to fetch checklist:', response.status);
      return undefined; // Or handle the error appropriately
    }
  } catch (error) {
    console.error('Error fetching checklist:', error);
    return undefined; // Or handle the error appropriately
  }
};

export const addNewItem = async (newItems: Item[]) => {
  await axios.patch(CHECKLIST_ENDPOINT, {
    items: newItems,
  });
};

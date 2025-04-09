import { createClient, Photo } from "pexels";
//todo
export const getTripImage = async (location: string) => {
  const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);
  try {
    const response = await client.photos.search({
      query: location.split(",")[0],
      per_page: 1,
      orientation: "landscape",
    });

    if (
      response &&
      "total_results" in response &&
      Array.isArray(response.photos) &&
      response.photos.length > 0
    ) {
      const photo: Photo = response.photos[0];
      return photo.src.landscape;
    } else {
      console.error("Pexels API returned an unexpected response:", response);
      return "";
    }
  } catch (error) {
    console.error("Error fetching image from Pexels:", error);
    return "";
  }
};

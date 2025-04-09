import { useEffect, useState } from "react";
import { Trip } from "../data/trips";
import { getTripImage } from "../utils/pexel-api";

interface TripCardProps {
  trip: Trip;
}
export const TripCard = ({ trip }: TripCardProps) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImg = async () => {
      const data = await getTripImage(trip.location);
      setImage(() => data);
    };

    fetchImg();
  }, [trip.location]);

  if (image.length === 0) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="card-title flex justify-between">
          <h2>{trip.location}</h2>
          <span>{trip.startDate}</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;

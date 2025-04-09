import { Link } from "react-router-dom";
import { Trip } from "../data/trips";
import TripCard from "./TripCard";

interface TripListProps {
  trips: Trip[];
}

export const TripList = ({ trips }: TripListProps) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3  gap-4">
      {trips.map((trip) => (
        <Link to={'/trips/' + trip.id}>
          <TripCard trip={trip} key={trip.id} />
        </Link>
      ))}
    </ul>
  );
};

export default TripList;

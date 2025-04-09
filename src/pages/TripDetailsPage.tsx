import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Trip } from "../data/trips";
import { getTripById } from "../utils/trips-api";
import TripCard from "../components/TripCard";

export const TripDetailsPage = () => {
  const [trip, setTrip] = useState<Trip>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTrip = async () => {
      if (id) {
        const data = await getTripById(id);
        setTrip(data);
      }
    };
    fetchTrip();
  }, [id]);

  return (
    <>
      <div className="mb-5">
        <Link to="/trips">
          <span className="btn btn-neutral">Back</span>
        </Link>
      </div>
      {trip && <TripCard trip={trip} />}
    </>
  );
};

export default TripDetailsPage;

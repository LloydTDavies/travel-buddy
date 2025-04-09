import { useState, useEffect } from "react";
import TripList from "../components/TripList";
import { Trip } from "../data/trips";
import { getTrips } from "../utils/trips-api";

export const TripsPage = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await getTrips();
      setTrips(data);
    };

    fetchTrips();
  }, []);

  return (
    <>
      <h1 className="text-pretty mb-10">Your Trips</h1>
      <div>
        <TripList trips={trips} />
      </div>
    </>
  );
};

export default TripsPage;

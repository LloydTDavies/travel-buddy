import TripList from '../components/TripList';
import { useTrips } from '../hooks/useTrips';

export const TripsPage = () => {
  const { trips } = useTrips();

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

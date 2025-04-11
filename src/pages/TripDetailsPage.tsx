import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Trip } from '../data/trips';
import { getTripById } from '../utils/trips-api';
import TripCard from '../components/TripCard';
import FlightDetails from '../components/FlightDetails';
import Map from '../components/Map';
import BoardingPassList from '../components/BoardingPassList';
import { PointOfInterestCard } from '../components/PointOfIntrestCard';
import { sortPointsOfInterestByType } from '../utils/pos-sorter';

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
      {trip && (
        <>
          <div className="flex flex-row gap-2">
            <div className="basis-6xl">
              <TripCard trip={trip} classes="w-full" />
            </div>
            <div className="basis-7xl">
              <div className="mb-5">
                <FlightDetails flight={trip.flight} />
              </div>
              <div>
                <BoardingPassList />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-row">
            <div>
              <Map />
            </div>
            <div className="divider divider-horizontal"></div>
            <PointOfInterestCard
              pointsOfInterest={sortPointsOfInterestByType(trip.pointsOfInterest)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default TripDetailsPage;

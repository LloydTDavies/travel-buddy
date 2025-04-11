import { useEffect, useState } from 'react';
import { Trip } from '../data/trips';
import { getTripImage } from '../utils/pexel-api';
import moment from 'moment';

interface TripCardProps {
  trip: Trip;
  classes?: string;
}
export const TripCard = ({ trip, classes }: TripCardProps) => {
  const [image, setImage] = useState('');

  const daysUntil = () => {
    const futureDate = moment(trip.startDate);
    const now = moment();
    const daysDifference = futureDate.diff(now, 'days');

    return daysDifference;
  };

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
    <div className={`card bg-base-100 image-full w-96 shadow-sm ${classes}`}>
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="card-title flex justify-between">
          <h2>{trip.location}</h2>
          <span>{`${daysUntil()} days`}</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;

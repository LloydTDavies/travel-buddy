import { useEffect, useState } from 'react';
import { Trip } from '../data/trips';
import { getTrips } from '../utils/trips-api';

export function useTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      const data = await getTrips();
      setTrips(data);
      setIsLoading(false);
    };

    fetchTrips();
  }, []);

  return { trips, setTrips, isLoading, setIsLoading };
}

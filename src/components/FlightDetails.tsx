import { Flight } from '../data/trips';
import moment from 'moment';

interface FlightDetailsProps {
  flight: Flight;
}

export const FlightDetails = ({ flight }: FlightDetailsProps) => {
  return (
    <div className="card w-full shadow-sm">
      <div className="card-body">
        <div className="card-title">Flight Details</div>
        <div className="flex flex-row">
          <div className="flex flex-col basis-5xl gap-2">
            <div>
              <h3 className="font-bold">Departing from:</h3>
              <div>{flight.departure}</div>
            </div>
            <div>
              <h3 className="font-bold">Departure Time:</h3>
              <div>{moment(flight.departureTime).calendar()}</div>
              <div>{moment(flight.departureTime).format('HH:mm')}</div>
            </div>
          </div>
          <div className="flex flex-col basis-5xl gap-2">
            <div>
              <h3 className="font-bold">Arriving to:</h3>
              <div>{flight.arrival}</div>
            </div>
            <div>
              <h3 className="font-bold">Arrival Time:</h3>
              <div>{moment(flight.arrivalTime).calendar()}</div>
              <div>{moment(flight.arrivalTime).format('HH:mm')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;

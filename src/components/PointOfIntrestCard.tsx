import moment from 'moment';
import { PointOfInterest } from '../data/trips';
import PosIcon from './PosIcon';

interface PointOfInterestProps {
  pointsOfInterest: PointOfInterest[];
}

export const PointOfInterestCard = ({ pointsOfInterest }: PointOfInterestProps) => {
  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md w-full">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Planned for your trip</li>

        {pointsOfInterest.map((pos, index) => (
          <li className="list-row" key={index}>
            <div>
              <PosIcon category={pos.type} />
            </div>
            <div>
              <div>{pos.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">{pos.type}</div>
            </div>
            {pos.booked && (
              <div>
                Booked for: {moment(pos.booked.date).format('DD/MM')} at {pos.booked?.time}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default PointOfInterestCard;

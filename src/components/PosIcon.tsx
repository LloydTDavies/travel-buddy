import { ChefHat, Footprints, Landmark, Ticket } from 'lucide-react';

export interface PosIconProps {
  category: string;
}

export const PosIcon = ({ category }: PosIconProps) => {
  switch (category) {
    case 'restaurants':
      return <ChefHat />;
    case 'events':
      return <Ticket />;
    case 'activities':
      return <Footprints />;
    case 'landmarks':
      return <Landmark />;
  }
};
export default PosIcon;

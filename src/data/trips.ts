interface Booked {
    date: string;
    time?: string; // Time is optional as it might not always be present
  }
  
  interface PointOfInterest {
    name: string;
    type: string;
    booked?: Booked; // Booked is optional as it might not always be present
  }
  
  interface Flight {
    departure: string;
    arrival: string;
    departureTime: string;
    arrivalTime: string;
    airline: string;
    flightNumber: string;
  }
  
  export interface Trip {
    id: number;
    location: string;
    startDate: string;
    endDate: string;
    flight: Flight;
    pointsOfInterest: PointOfInterest[];
  }
  
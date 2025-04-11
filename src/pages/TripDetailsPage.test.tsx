import { render, screen } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import TripDetailsPage from './TripDetailsPage';
import * as tripsApi from '../utils/trips-api';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

vi.mock('../utils/trips-api');

describe('Trip Details Page', () => {
  beforeEach(() => {
    (tripsApi.getTripById as Mock).mockResolvedValueOnce(() => ({
      id: 1,
      location: 'Paris, France',
      startDate: '2024-06-15',
      endDate: '2024-06-22',
      flight: {
        departure: 'LAX',
        arrival: 'CDG',
        departureTime: '2024-06-15T10:30:00',
        arrivalTime: '2024-06-16T06:45:00',
        airline: 'Air France',
        flightNumber: 'AF377',
      },
      pointsOfInterest: [
        {
          name: 'Eiffel Tower',
          type: 'landmarks',
          booked: {
            date: '2024-06-16',
            time: '14:00',
          },
        },
        {
          name: 'Le Cheval Blanc',
          type: 'restaurants',
          booked: {
            date: '2024-06-17',
            time: '19:30',
          },
        },
        {
          name: 'Louvre Museum',
          type: 'landmarks',
          booked: {
            date: '2024-06-18',
            time: '10:00',
          },
        },
      ],
    }));
    render(
      <MemoryRouter initialEntries={['/trips/123']}>
        <Routes>
          <Route path="/trips/:id" element={<TripDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );
  });
  it('should display the users planned trip', async () => {
    expect(await screen.findByText('Back')).toBeInTheDocument();
    expect(await screen.findByText('Paris, France')).toBeInTheDocument();
  });

  it('should display the trips point of interests', async () => {
    expect(await screen.findByText('Eiffel Tower'));
    expect(await screen.findAllByText('landmarks'));
  });

  it('should display flight details', async () => {
    expect(await screen.findByText('LAX'));
    expect(await screen.findByText('CDG'));
  });
});

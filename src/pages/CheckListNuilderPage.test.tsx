import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, Mock } from 'vitest';
import CheckListBuilderPage from './CheckListBuilderPage';
import * as checklistApi from '../utils/checklist-api';

vi.mock('../utils/checklist-api');

describe('Check List Builder Page', async () => {
  it('adds a new item after clicking add', async () => {
    (checklistApi.getCheckList as Mock)
      .mockResolvedValueOnce({
        items: [{ id: '1', label: 'Passport' }],
      }) // on mount
      .mockResolvedValueOnce({
        items: [
          { id: '1', label: 'Passport' },
          { id: '2', label: 'Suitcase' },
        ],
      }); // after patch

    (checklistApi.addNewItem as Mock).mockResolvedValue(undefined);

    render(<CheckListBuilderPage />);

    expect(await screen.findByText('Passport')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Add to your list');
    await userEvent.type(input, 'Suitcase');
    await userEvent.click(screen.getByText('Add'));

    await waitFor(() => {
      expect(screen.getByText('Suitcase')).toBeInTheDocument();
    });
  });
});

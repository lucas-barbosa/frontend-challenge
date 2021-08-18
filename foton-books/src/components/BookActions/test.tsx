import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import BookActions from '.';

describe('<BookActions />', () => {
  it('should render a read, listen and share button', () => {
    renderWithTheme(<BookActions />);

    expect(screen.getByText(/read/i)).toBeInTheDocument();
    expect(screen.getByText(/listen/i)).toBeInTheDocument();
    expect(screen.getByText(/share/i)).toBeInTheDocument();
  });
});

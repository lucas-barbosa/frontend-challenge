import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import BottomMenu from '.';

describe('<BottomMenu />', () => {
  it('should render a footer with home, libraries and profile buttons', () => {
    renderWithTheme(<BottomMenu />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /libraries/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /profile/i })).toBeInTheDocument();
  });
});

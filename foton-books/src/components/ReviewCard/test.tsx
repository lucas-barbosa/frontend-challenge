import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import ReviewCard from '.';
import mock from './mock';

describe('<ReviewCard />', () => {
  it('should render a cover', () => {
    renderWithTheme(<ReviewCard {...mock} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.cover);
  });

  it('should render a link', () => {
    renderWithTheme(<ReviewCard {...mock} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', mock.link);
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import CurrentlyReadingCard from '.';
import mock from './mock';

describe('<CurrentlyReadingCard />', () => {
  it('should render cover, title, author, currently chapter and total chapters', () => {
    renderWithTheme(<CurrentlyReadingCard {...mock} />);

    expect(
      screen.getByRole('heading', { name: mock.title })
    ).toBeInTheDocument();

    expect(screen.getByText(`by ${mock.author}`)).toBeInTheDocument();

    expect(
      screen.getByLabelText(
        `Chapter ${mock.currentlyChapter} From ${mock.totalChapters}`
      )
    ).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', mock.cover);
  });
});

import 'match-media-mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import newBookMock from 'components/NewBookCard/mock';
import readingMock from 'components/CurrentlyReadingCard/mock';
import reviewMock from 'components/ReviewCard/mock';

import HomePage from '.';

const props = {
  username: 'Mehmed Al Fatih',
  newBooks: [newBookMock, newBookMock, newBookMock, newBookMock],
  currentlyReading: [readingMock, readingMock, readingMock],
  reviews: [reviewMock, reviewMock]
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock('components/NewBookCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Book" />;
  }
}));

jest.mock('components/CurrentlyReadingCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Currently Reading" />;
  }
}));

jest.mock('components/ReviewCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Review" />;
  }
}));

describe('<Home />', () => {
  it('should render username, discover new books, currently reading, reviews of the day', () => {
    renderWithTheme(<HomePage {...props} />);

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByText(props.username)).toBeInTheDocument();

    expect(screen.getByText('Discover new book')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Book')).toHaveLength(
      props.newBooks.length
    );

    expect(screen.getByText('Currently Reading')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Currently Reading')).toHaveLength(
      props.currentlyReading.length
    );

    expect(screen.getByText('Reviews of The Days')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Review')).toHaveLength(
      props.reviews.length
    );
  });
});

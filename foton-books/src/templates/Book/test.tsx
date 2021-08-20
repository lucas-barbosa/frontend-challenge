import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import Book from '.';
import props from './mock';

describe('<Book />', () => {
  it('should render a cover, title, author, description and action menu', () => {
    renderWithTheme(<Book {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover
    );

    expect(
      screen.getByRole('heading', { name: `${props.title}: ${props.subtitle}` })
    ).toBeInTheDocument();

    expect(screen.getByText(props.author)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();

    expect(screen.getByText('Read')).toBeInTheDocument();
    expect(screen.getByText(/listen/i)).toBeInTheDocument();
    expect(screen.getByText(/share/i)).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import BookCard from '.';
import props from './mock';

describe('<BookCard />', () => {
  it('should render title, author and a image', () => {
    renderWithTheme(<BookCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByText(`by ${props.author}`)).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: `${props.title} by ${props.author}` })
    ).toHaveAttribute('src', props.cover);
  });

  it('should have a link to book page on image', () => {
    renderWithTheme(<BookCard {...props} />);

    const image = screen.getByRole('img', {
      name: `${props.title} by ${props.author}`
    });

    expect(image.parentElement).toHaveAttribute(
      'href',
      `/book-details/${props.id}`
    );
  });
});

import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/helpers';

import NewBookCard from '.';
import props from './mock';

describe('<NewBookCard />', () => {
  it('should render the title, author, count and cover', () => {
    renderWithTheme(<NewBookCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByText(props.author)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.cover
    );

    expect(
      screen.getByLabelText(`${props.count}+ Read Now`)
    ).toBeInTheDocument();
  });
});

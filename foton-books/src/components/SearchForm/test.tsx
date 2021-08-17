import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/helpers';

import SearchForm from '.';

describe('<SearchForm />', () => {
  it('should render input and icon', () => {
    renderWithTheme(<SearchForm />);

    expect(screen.getByPlaceholderText(/search book/i)).toBeInTheDocument();
    expect(screen.getByTitle(/search icon/i)).toBeInTheDocument();
  });

  it('should call onChange', async () => {
    const onChange = jest.fn();
    const text = 'Harry Potter';

    renderWithTheme(<SearchForm onChange={onChange} />);

    const input = screen.getByPlaceholderText(/search book/i);
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onChange).toBeCalledWith(text);
    });
  });

  it('should can have initial value', () => {
    const text = 'Harry Potter';

    renderWithTheme(<SearchForm initialValue={text} />);

    const input = screen.getByPlaceholderText(/search book/i);
    expect(input).toHaveValue(text);
  });
});

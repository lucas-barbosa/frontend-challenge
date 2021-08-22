import Loader from 'react-loader-spinner';
import { forwardRef } from 'react';

import Base from 'templates/Base';
import BookCard from 'components/BookCard';
import Grid from 'components/Grid';
import { BookProps } from 'types/book';

import * as S from './styles';
import Container from 'components/Container';
import ErrorMessage from 'components/ErrorMessage';

export type SearchProps = {
  error?: string;
  items?: BookProps[];
  loading?: boolean;
};

const Search = (
  { error, items, loading = false }: SearchProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <Base>
    {error && (
      <S.CenterBox>
        <ErrorMessage>{error}</ErrorMessage>
      </S.CenterBox>
    )}

    {loading && !items?.length && (
      <S.CenterBox>
        <Loader type="TailSpin" color="#FF6978" height={75} width={75} />
      </S.CenterBox>
    )}

    {items && (
      <Container>
        <Grid>
          {items.map((book, index) => (
            <BookCard key={`${book.id}-${index}`} {...book} />
          ))}
        </Grid>
      </Container>
    )}

    {loading && items?.length && (
      <S.CenterBox>
        <Loader type="ThreeDots" color="#FF6978" width={50} />
      </S.CenterBox>
    )}

    <div ref={ref} style={{ visibility: 'hidden' }} />
  </Base>
);

// eslint-disable-next-line react/display-name
export default forwardRef(Search);

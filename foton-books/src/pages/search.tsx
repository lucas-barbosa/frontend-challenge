import { useRouter } from 'next/router';
import { useSWRInfinite } from 'swr';

import Search from 'templates/Search';
import { getBooksByName } from 'services/bookService';
import { useEffect, useRef, useState } from 'react';
import { BookProps } from 'types/book';
import useInfiniteData from 'hooks/useInfiniteData';
import useOnScreen from 'hooks/useOnScreen';

export default function Index() {
  const { query, replace } = useRouter();
  const searchTerm = `${query.q}`;

  if (!searchTerm) replace('/');

  const containerRef = useRef(null);
  const onScreen = useOnScreen(containerRef);

  const { items, error, isEmpty, setSize, isLoading, isLastPage } =
    useInfiniteData<BookProps>(getBooksByName, searchTerm);

  useEffect(() => {
    if (onScreen && !isLoading && !isLastPage) setSize((size) => size + 1);
  }, [onScreen, setSize, isLoading, isLastPage]);

  return (
    <Search
      ref={containerRef}
      items={items}
      loading={isLoading}
      error={error || (isEmpty && 'Nenhum livro encontrado!')}
    />
  );
}

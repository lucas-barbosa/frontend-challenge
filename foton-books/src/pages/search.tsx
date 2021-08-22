import { useRouter } from 'next/router';

import Search from 'templates/Search';
import { getBooksByName } from 'services/bookService';
import { useEffect, useRef } from 'react';
import { BookProps } from 'types/book';
import useInfiniteData from 'hooks/useInfiniteData';
import useOnScreen from 'hooks/useOnScreen';

export default function Index() {
  const { query, replace } = useRouter();
  const searchTerm = `${query.q}`;

  if (!searchTerm) replace('/');

  const containerRef = useRef(null);
  const onScreen = useOnScreen(containerRef);

  const {
    items,
    error,
    isEmpty,
    isLoading,
    isLastPage,
    setSize: setPage
  } = useInfiniteData<BookProps>(getBooksByName, searchTerm);

  useEffect(() => {
    if (onScreen && !isLoading && !isLastPage) setPage((size) => size + 1);
  }, [onScreen, setPage, isLoading, isLastPage]);

  return (
    <Search
      ref={containerRef}
      items={items}
      loading={isLoading}
      error={error || (isEmpty && 'Nenhum livro encontrado!')}
    />
  );
}

import { useSWRInfinite } from 'swr';

function useInfiniteData<T>(
  fetcher: (key: string, index: number) => Promise<T[]>,
  searchTerm: string
) {
  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPage) => {
      if (previousPage && !previousPage.length) return null;
      return [searchTerm, index];
    },
    fetcher
  );

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === 'undefined';

  const isEmpty = data?.[0]?.length === 0;
  const items = data ? Array<T>().concat(...data) : [];
  const isLastPage = !data?.[data.length - 1].length;

  return {
    isLoading: isLoadingInitialData || isLoadingMore,
    isLastPage,
    items,
    isEmpty,
    error,
    size,
    setSize
  };
}

export default useInfiniteData;

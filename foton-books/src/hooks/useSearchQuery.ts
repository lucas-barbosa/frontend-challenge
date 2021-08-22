import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQueryState } from 'next-usequerystate';
import debounce from 'lodash.debounce';

type callback = (value: string) => void;
type useSearchReponse = [string | null, callback];

const useSearchQuery = (
  searchPage: string,
  homePage = '/'
): useSearchReponse => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useQueryState('q');

  const handleSearch = (value: string) => {
    if (!value.length) {
      router.push(homePage);
    } else if (router.pathname != searchPage) {
      router.push({
        pathname: searchPage,
        query: { q: value }
      });
    } else {
      setSearchValue(value);
    }
  };

  const debouncedHandleSearch = useMemo(() => debounce(handleSearch, 300), []);

  useEffect(() => {
    return () => {
      debouncedHandleSearch.cancel();
    };
  }, [debouncedHandleSearch]);

  return [searchValue, debouncedHandleSearch];
};

export default useSearchQuery;

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQueryState } from 'next-usequerystate';
import debounce from 'lodash.debounce';

import BottomMenu from 'components/BottomMenu';
import SearchForm from 'components/SearchForm';
import Container from 'components/Container';

import * as S from './styles';
import useSearchQuery from 'hooks/useSearchQuery';

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  const [searchValue, debouncedHandleSearch] = useSearchQuery('/search');

  return (
    <S.Wrapper>
      <S.Container>
        <Container>
          <SearchForm
            initialValue={searchValue || ''}
            onChange={debouncedHandleSearch}
          />
        </Container>

        {children}
      </S.Container>

      <BottomMenu />
    </S.Wrapper>
  );
};

export default Base;

import * as S from './styles';
import icon from './icon.svg';
import { useState } from 'react';

type SearchFormProps = {
  initialValue?: string;
  onChange?: (value: string) => void;
};

const SearchForm = ({ initialValue = '', onChange }: SearchFormProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onChange && onChange(newValue);
  };

  return (
    <S.Wrapper>
      <label htmlFor="search" aria-label="Search book">
        <S.Icon src={icon} title="search icon" />
      </label>

      <S.Input
        id="search"
        type="text"
        placeholder="Search book"
        onChange={handleChange}
        value={value}
      />
    </S.Wrapper>
  );
};

export default SearchForm;

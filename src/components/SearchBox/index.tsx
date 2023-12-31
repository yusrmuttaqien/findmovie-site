import { useState } from 'react';
import { Wrapper, SearchIcon } from './styles';

type SearchBoxProps = {
  className?: string;
  handleSearch?: (search: string) => void;
  isRealtime?: boolean;
  id?: string;
};

export default function SearchBox(props: SearchBoxProps) {
  const { className, handleSearch, isRealtime, id } = props;
  const [search, setSearch] = useState('');

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isRealtime) {
      handleSearch?.(e.target.value);
    }

    setSearch(e.target.value);
  };
  const _handleSearch = (e?: React.KeyboardEvent) => {
    if (e?.key === 'Enter' || e?.type === 'click') {
      handleSearch?.(search);
    }
  };

  return (
    <Wrapper className={className} id={id}>
      <input
        type="text"
        name="search"
        id="search-all"
        placeholder="search something..."
        onChange={_handleChange}
        onKeyUp={_handleSearch}
      />
      <SearchIcon tabIndex="0" onClick={_handleSearch} onKeyUp={_handleSearch} />
    </Wrapper>
  );
}

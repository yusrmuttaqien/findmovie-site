import { useRef, useState } from 'react';
import { useMovieDBHome } from 'hooks/index';
import Footer from 'components/Footer';
import MainExplore from './fragments/MainExplore';
import MainSearch from './fragments/MainSearch';
import { debounce } from 'utils/index';
import { Wrapper, SearchBox, Discover } from './styles';

export default function Main() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState(null);

  const debouncedSearch = debounce(setSearch, 200);

  const _handleSearch = (search: string) => debouncedSearch(search);
  const _handleScroll = (e?: React.KeyboardEvent) => {
    if (e?.key === 'Enter' || e?.type === 'click') {
      const headerHeight = headerRef.current?.getBoundingClientRect().height;

      window.scrollTo({
        top: headerHeight,
        behavior: 'smooth',
      });
    }
  };

  useMovieDBHome();

  return (
    <Wrapper>
      <header ref={headerRef}>
        <div id="title-wrapper">
          <h1>Find Movies</h1>
          <p>
            powered by{' '}
            <a href="https://developer.themoviedb.org/docs" target="_blank">
              themoviedb.org
            </a>
          </p>
        </div>
        <SearchBox handleSearch={_handleSearch} isRealtime />
        <Discover onClick={_handleScroll} onKeyUp={_handleScroll} tabIndex="0" />
      </header>
      {search ? <MainSearch query={search} /> : <MainExplore />}
      <Footer />
    </Wrapper>
  );
}

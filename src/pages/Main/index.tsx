import { useRef } from 'react';
import { useMovieDBHome } from 'hooks/index';
import MainExplore from './fragments/MainExplore';
import Footer from 'components/Footer';
import { Wrapper, SearchBox, Discover } from './styles';

export default function Main() {
  const headerRef = useRef<HTMLDivElement>(null);

  const _handleSearch = (search: string) => {
    console.log(search);
  };
  const _handleScroll = () => {
    const headerHeight = headerRef.current?.getBoundingClientRect().height;

    window.scrollTo({
      top: headerHeight,
      behavior: 'smooth',
    });
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
        <Discover onClick={_handleScroll} />
      </header>
      <MainExplore />
      <Footer />
    </Wrapper>
  );
}

import { useEffect, useState, Fragment, useRef } from 'react';
import { useFetchSearch } from 'hooks/index';
import { debounce } from 'utils/index';
import ContentCard from 'components/ContentCard';
import theme from 'styles/index';
import { Wrapper, Group, Pagination, Loading, Avatar } from './styles';

type MainSearchProps = {
  query: string;
};

type MockUIEvent = {
  target: Window;
};

export default function MainSearch(props: MainSearchProps) {
  const { query } = props;
  const oldQuery = useRef('');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(3);
  const { data, isLoading } = useFetchSearch(query, currentPage);
  const isMovie = data?.movie.length || 0 > 0;
  const isPeople = data?.people.length || 0 > 0;
  const isTV = data?.tv.length || 0 > 0;
  const isResult = data?.pagination.totalResults || 0 > 0;
  const movies = data?.movie;
  const peoples = data?.people;
  const tvs = data?.tv;

  function _alignView() {
    const searchTop = document.getElementById('search-multi')?.getBoundingClientRect()
      .top as number;

    window.scrollTo({
      top: searchTop + window.scrollY - 32,
      behavior: 'smooth',
    });
  }
  const debouncedAlignView = debounce(_alignView, 500);
  function _handleVisibleCount(e: UIEvent | MockUIEvent) {
    const target = e?.target as Window;
    const width = target.screen.width;

    switch (true) {
      case width >= Number(theme.screen.desktop):
        setVisibleCount(8);
        break;
      case width >= Number(theme.screen.tablet.min):
        setVisibleCount(4);
        break;
      default:
        setVisibleCount(3);
        break;
    }
  }
  function _handlePagination(page: number) {
    return () => setCurrentPage(page);
  }

  useEffect(() => {
    if (oldQuery.current !== query) {
      oldQuery.current = query;
      setCurrentPage(1);
      debouncedAlignView();
    }
  }, [data, query]);
  useEffect(() => {
    _handleVisibleCount({ target: window });
    window.addEventListener('resize', _handleVisibleCount);

    return () => window.removeEventListener('resize', _handleVisibleCount);
  }, []);

  return (
    <Wrapper>
      <Fragment>
        <Group>
          <div id="search-title">
            {isResult ? <p>Search result for</p> : <p>There is no</p>}&nbsp;
            <h3>"{query}"</h3>&nbsp;
            {!isResult && <p>in TheMovieDB database</p>}
          </div>
          {!isLoading && isResult && (
            <Pagination
              currentPage={currentPage}
              totalPages={data?.pagination.totalPages || 0}
              handleOnJump={_handlePagination}
              visibleCount={visibleCount}
            />
          )}
          {isLoading && <Loading />}
          {isResult && !isLoading && (
            <div id="categories-wrapper">
              {isMovie && (
                <div id="categories">
                  <h3>Movies</h3>
                  <div>
                    {movies?.map((movie, key) => (
                      <ContentCard key={key} type="movie" {...movie} />
                    ))}
                  </div>
                </div>
              )}
              {isTV && (
                <div id="categories">
                  <h3>TV Series</h3>
                  <div>
                    {tvs?.map((tv, key) => (
                      <ContentCard key={key} type="tv" {...tv} />
                    ))}
                  </div>
                </div>
              )}
              {isPeople && (
                <div id="categories" data-categories="people">
                  <h3>People</h3>
                  <div>
                    {peoples?.map((people, key) => (
                      <Avatar key={key} {...people} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Group>
      </Fragment>
      {!isLoading && isResult && (
        <Pagination
          currentPage={currentPage}
          totalPages={data?.pagination.totalPages || 0}
          handleOnJump={_handlePagination}
          visibleCount={visibleCount}
        />
      )}
    </Wrapper>
  );
}

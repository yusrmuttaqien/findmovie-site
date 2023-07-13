import { useEffect, useState, Fragment } from 'react';
import { useFetchSearch } from 'hooks/index';
import ContentCard from 'components/ContentCard';
import theme from 'styles/index';
import { Wrapper, Group, Pagination } from './styles';

type MainSearchProps = {
  query: string;
};

type MockUIEvent = {
  target: Window;
};

export default function MainSearch(props: MainSearchProps) {
  const { query } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(3);
  const { data, isLoading } = useFetchSearch(query, currentPage);
  const isMovie = data?.movie.length || 0 > 0;
  const isTV = data?.tv.length || 0 > 0;
  const isResult = data?.pagination.totalResults || 0 > 0;
  const movies = data?.movie;
  const tvs = data?.tv;

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
    _handleVisibleCount({ target: window });
    window.addEventListener('resize', _handleVisibleCount);

    return () => window.removeEventListener('resize', _handleVisibleCount);
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Fragment>
          <Group>
            <div id="search-title">
              <p>Search result for</p>&nbsp;
              <h3>"{query}"</h3>
            </div>
            {isResult ? (
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
              </div>
            ) : (
              <p>No result...</p>
            )}
          </Group>
        </Fragment>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={data?.pagination.totalPages || 0}
        handleOnJump={_handlePagination}
        visibleCount={visibleCount}
      />
    </Wrapper>
  );
}

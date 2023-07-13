import { Fragment } from 'react';
import { useFetchHome } from 'hooks/index';
import ContentCard from 'components/ContentCard';
import { Wrapper, Group } from './styles';

export default function MainExplore() {
  const { isLoading, data } = useFetchHome();
  const tMovies = data?.trending.movies;
  const tTVs = data?.trending.tvs;
  const dMovies = data?.discover.movies;
  const dTVs = data?.discover.tvs;

  return (
    <Wrapper>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Fragment>
          <Group>
            <h2>Now Trending</h2>
            <div id="categories-wrapper">
              <div id="categories">
                <h3>Movies</h3>
                <div>
                  {tMovies?.map((movie, key) => (
                    <ContentCard key={key} type="movie" {...movie} />
                  ))}
                </div>
              </div>
              <div id="categories">
                <h3>TV Series</h3>
                <div>
                  {tTVs?.map((tv, key) => (
                    <ContentCard key={key} type="tv" {...tv} />
                  ))}
                </div>
              </div>
            </div>
          </Group>
          <Group>
            <h2>Discover</h2>
            <div id="categories-wrapper">
              <div id="categories">
                <h3>Movies</h3>
                <div>
                  {dMovies?.map((movie, key) => (
                    <ContentCard key={key} type="movie" {...movie} />
                  ))}
                </div>
              </div>
              <div id="categories">
                <h3>TV Series</h3>
                <div>
                  {dTVs?.map((tv, key) => (
                    <ContentCard key={key} type="tv" {...tv} />
                  ))}
                </div>
              </div>
            </div>
          </Group>
        </Fragment>
      )}
    </Wrapper>
  );
}

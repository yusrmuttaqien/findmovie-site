import { useEffect, useState } from 'react';
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
  const [visibleCount, setVisibleCount] = useState(3);

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
    return () => {
      console.log(page);
    };
  }

  useEffect(() => {
    _handleVisibleCount({ target: window });
    window.addEventListener('resize', _handleVisibleCount);

    return () => window.removeEventListener('resize', _handleVisibleCount);
  }, []);

  return (
    <Wrapper>
      <Group>
        <div id="search-title">
          <p>Search result for</p>&nbsp;
          <h3>"{query}"</h3>
        </div>
        <div id="categories-wrapper">
          <div id="categories">
            <h3>Movies</h3>
            <div>
              <ContentCard />
              <ContentCard />
              <ContentCard />
            </div>
          </div>
          <div id="categories">
            <h3>TV Series</h3>
            <div>
              <ContentCard />
              <ContentCard />
              <ContentCard />
            </div>
          </div>
        </div>
      </Group>
      <Pagination
        currentPage={1}
        totalPages={100}
        handleOnJump={_handlePagination}
        visibleCount={visibleCount}
      />
    </Wrapper>
  );
}

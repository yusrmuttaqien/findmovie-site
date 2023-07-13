import { useEffect, useState } from 'react';
import ContentCard from 'components/ContentCard';
import theme from 'styles/index';
import { Wrapper, Group, Pagination } from './styles';

type MainSearchProps = {
  query: string;
};

export default function MainSearch(props: MainSearchProps) {
  const { query } = props;
  const [visibleCount, setVisibleCount] = useState(3);

  function _handleVisibleCount(e: UIEvent) {
    const target = e?.target as Window;
    const width = target.screen.width;

    switch (true) {
      case width >= Number(theme.screen.desktop):
        setVisibleCount(10);
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
    return () => {};
  }

  useEffect(() => {
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
          <h3>Movies</h3>
          <div>
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
          <h3>TV Series</h3>
          <div>
            <ContentCard />
            <ContentCard />
            <ContentCard />
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

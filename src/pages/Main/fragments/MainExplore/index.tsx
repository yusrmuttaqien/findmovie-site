import ContentCard from 'components/ContentCard';
import { Wrapper, Group } from './styles';

export default function MainExplore() {
  return (
    <Wrapper>
      <Group>
        <h2>Now Trending</h2>
        <div id="categories-wrapper">
          <div id="categories">
            <h3>Movies</h3>
            <div>
              <ContentCard />
              <ContentCard />
            </div>
          </div>
          <div id="categories">
            <h3>TV Series</h3>
            <div>
              <ContentCard />
              <ContentCard />
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
              <ContentCard />
              <ContentCard />
            </div>
          </div>
          <div id="categories">
            <h3>TV Series</h3>
            <div>
              <ContentCard />
              <ContentCard />
            </div>
          </div>
        </div>
      </Group>
    </Wrapper>
  );
}

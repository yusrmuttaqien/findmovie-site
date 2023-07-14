import Pill from 'components/Pill';
import Avatar from 'components/Avatar';
import { useDetails } from 'pages/Details';
import { BasicMetadata } from 'utils/fetch';
import { Wrapper, ContentCard } from './styles';

export default function TVDetail() {
  const { data } = useDetails();
  const isOverview = data?.overview;
  const isProduction = data?.production?.length || 0 > 0;
  const isGeneres = data?.genres?.length || 0 > 0;
  const genres = data?.genres;
  const production = data?.production;
  const credits = data?.credits;
  const overview = data?.overview;
  const episodes = data?.episodes;
  const seasons = data?.seasons;
  const latestEpisode = data?.latestEpisode as BasicMetadata;

  return (
    <Wrapper>
      {isGeneres && (
        <div id="metadatas">
          <h3>Genres</h3>
          <div>
            {genres?.map((genre, key) => (
              <Pill key={key}>{genre}</Pill>
            ))}
          </div>
        </div>
      )}
      {isProduction && (
        <div id="metadatas">
          <h3>Production of</h3>
          <div>
            {production?.map((p, key) => (
              <Pill key={key}>{p}</Pill>
            ))}
          </div>
        </div>
      )}
      <div id="metadatas">
        <h3>
          {seasons} Season • {episodes} Episodes
        </h3>
      </div>
      <div id="metadatas">
        <h3>Latest episode</h3>
        <div>
          <ContentCard type="tv" {...latestEpisode} />
        </div>
      </div>
      <div id="metadatas">
        <h3>Credits</h3>
        <div>
          {credits?.map((c, key) => (
            <Avatar key={key} {...c} />
          ))}
        </div>
      </div>
      {isOverview && (
        <div id="metadatas">
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      )}
    </Wrapper>
  );
}

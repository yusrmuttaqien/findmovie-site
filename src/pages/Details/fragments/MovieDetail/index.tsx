import { useDetails } from 'pages/Details';
import Pill from 'components/Pill';
import Avatar from 'components/Avatar';
import { Wrapper } from './styles';

export default function MovieDetail() {
  const { data } = useDetails();
  const isOverview = data?.overview;
  const isProduction = data?.production?.length || 0 > 0;
  const isGeneres = data?.genres?.length || 0 > 0;
  const genres = data?.genres;
  const production = data?.production;
  const credits = data?.credits;
  const overview = data?.overview;
  const title = data?.title;

  return (
    <Wrapper>
      <div id="metadatas">
        <h3 data-meta="title">
          This is <span>{title}</span>
        </h3>
      </div>
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

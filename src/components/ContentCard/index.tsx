import { BasicMetadata } from 'utils/fetch';
import { Wrapper, Backdrop, Link } from './styles';
import NIDesktop from 'assets/nativeSVGs/NoImageDesktop.svg?url';
import NIMobile from 'assets/nativeSVGs/NoImageMobile.svg?url';

type ContentCardProps = {
  className?: string;
  type: 'movie' | 'tv';
};

type FusionProps = BasicMetadata & ContentCardProps;

export default function ContentCard(props: FusionProps) {
  const { className, backdrop, date, id, lang, overview, title, type } = props;

  return (
    <Wrapper className={className}>
      <div id="contents">
        <p id="content-subdetail">
          <span>{lang}</span> • <span>{date}</span>
        </p>
        <Link to={`/details/${type}/${id}`} title={title}>
          {title}
        </Link>
        <p id="content-detail" title={overview}>
          {overview}
        </p>
      </div>
      <Backdrop $placeholder={[NIDesktop, NIMobile]}>
        <img src={backdrop} alt="backdrop-image" id="backdrop-image" loading="lazy" />
      </Backdrop>
    </Wrapper>
  );
}

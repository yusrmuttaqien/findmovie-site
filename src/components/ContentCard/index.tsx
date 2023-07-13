import { Wrapper, Backdrop, Link } from './styles';
import NIDesktop from 'assets/nativeSVGs/NoImageDesktop.svg?url';
import NIMobile from 'assets/nativeSVGs/NoImageMobile.svg?url';

type ContentCardProps = {
  className?: string;
};

export default function ContentCard(props: ContentCardProps) {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <div id="contents">
        <p id="content-subdetail">
          <span>EN</span> • <span>2025 - 10 - 10</span>
        </p>
        <Link to="/details/movie/11">Iron Man: Homecoming</Link>
        <p id="content-detail">
          Lorem ipsum dolor sit amet consectetur. Volutpat massa arcu curabitur enim at consectetur
          tristique. Et risus vestibulum id amet. curabitur enim at consectetur tristique. Et risus
          vestibulum id ametcurabitur enim at consectetur tristique. Et risus vestibulum id amet.
        </p>
      </div>
      <Backdrop $placeholder={[NIDesktop, NIMobile]}>
        <img
          src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          alt="backdrop-image"
          id="backdrop-image"
          loading="lazy"
        />
      </Backdrop>
    </Wrapper>
  );
}

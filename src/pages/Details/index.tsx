import { useRef, useEffect } from 'react';
import {
  Outlet,
  useNavigate,
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import { useFetchDetails } from 'hooks/index';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Loading from 'components/Loading';
import { ArrowIcon } from 'assets/svgs';
import { DetailsMetadata } from 'utils/fetch';
import { contentType } from 'utils/constants';
import { Wrapper, Read, Link, Backdrop } from './styles';

type LoaderReturn = {
  id: string;
  type: {
    raw: string;
    show: string;
  };
};
type DetailsHooks = {
  isLoading: boolean;
  data: DetailsMetadata | undefined;
};

export { default as TVDetail } from './fragments/TVDetail';
export { default as MovieDetail } from './fragments/MovieDetail';
export function useDetails() {
  return useOutletContext<DetailsHooks>();
}
export function loader(e: LoaderFunctionArgs) {
  const url = e.request.url;
  let type = {};

  if (url.includes('/' + contentType.movie.raw)) {
    type = contentType.movie;
  } else if (url.includes(contentType.tv.raw)) {
    type = contentType.tv;
  } else {
    return redirect('/');
  }

  return { id: e.params.id, type };
}

export default function Details() {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const { id, type } = useLoaderData() as LoaderReturn;
  const { data, isLoading } = useFetchDetails(id, type.raw);
  const title = data?.title || 'Getting metadata';

  const _handleScroll = (e?: React.KeyboardEvent) => {
    if (e?.key === 'Enter' || e?.type === 'click') {
      const headerHeight = headerRef.current?.getBoundingClientRect().height;

      window.scrollTo({
        top: headerHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    !isLoading && !data && navigate('/');
  }, [isLoading, data]);

  return (
    <Wrapper>
      <header ref={headerRef}>
        <div id="title-wrapper">
          {isLoading ? (
            <p>Auto redirect if not found</p>
          ) : (
            <p>
              <Link to="/">
                <ArrowIcon />
                Go Home
              </Link>
              &nbsp;•&nbsp;
              {<span>It's a {type.show}</span>}
            </p>
          )}
          <h1 title={title}>{title}</h1>
        </div>
        <Backdrop>
          <img src={data?.backdrop} alt="backdrop-img" loading="lazy" />
        </Backdrop>
        <Read onClick={_handleScroll} onKeyUp={_handleScroll} tabIndex="0" />
      </header>
      {isLoading ? <Loading /> : <Outlet context={{ isLoading, data }} />}
      <Footer />
      <ScrollToTop />
    </Wrapper>
  );
}

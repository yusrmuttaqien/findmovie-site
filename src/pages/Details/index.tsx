import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom';
import { ArrowIcon } from 'assets/svgs';
import { contentType } from 'utils/constants';
import { Wrapper, Read, Link, Backdrop } from './styles';

type LoaderReturn = {
  id: string | null;
  type: string | null;
};

export { default as TVDetail } from './fragments/TVDetail';
export { default as MovieDetail } from './fragments/MovieDetail';
export function loader(e: LoaderFunctionArgs) {
  const url = e.request.url;
  let type;

  if (url.includes(contentType.movie.raw)) {
    type = contentType.movie.show;
  } else if (url.includes(contentType.tv.raw)) {
    type = contentType.tv.show;
  } else {
    return redirect('/');
  }

  return { id: e.params.id, type };
}

export default function Details() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { id, type } = useLoaderData() as LoaderReturn;

  const _handleScroll = (e?: React.KeyboardEvent) => {
    if (e?.key === 'Enter' || e?.type === 'click') {
      const headerHeight = headerRef.current?.getBoundingClientRect().height;

      window.scrollTo({
        top: headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Wrapper>
      <header ref={headerRef}>
        <div id="title-wrapper">
          <p>
            <Link to="/">
              <ArrowIcon />
              Go Home
            </Link>
            &nbsp;•&nbsp;
            <span>
              It's a {type}, id: {id}
            </span>
          </p>
          <h1>Guardian of the Galaxy</h1>
        </div>
        <Backdrop>
          <img
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
            alt="backdrop-img"
            loading="lazy"
          />
        </Backdrop>
        <Read onClick={_handleScroll} onKeyUp={_handleScroll} tabIndex="0" />
      </header>
      <Outlet />
    </Wrapper>
  );
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Details, { MovieDetail, TVDetail, loader } from './Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/details',
    element: <Details />,
    loader,
    children: [
      {
        path: 'movie/:id',
        element: <MovieDetail />,
      },
      {
        path: 'tv/:id',
        element: <TVDetail />,
      },
    ],
  },
]);

export default function PageRouter() {
  return <RouterProvider router={router} />;
}

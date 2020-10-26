type Route = {
  id: string,
  path: string,
};

export const routes: Route[] = [
  {
    id: 'home',
    path: '/',
  },
  { id: 'traits', path: '/traits' },
  { id: 'random', path: '/random' },
  // { id: 'weighted', path: '/random/weighted' },
  { id: 'changelog', path: '/changelog' },
];

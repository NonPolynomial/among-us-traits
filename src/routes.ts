type Route = {
  path: string,
  title: string,
};

export const routes: Route[] = [
  {
    path: '/',
    title: 'Home',
  },
  { path: '/traits', title: 'Traits' },
  { path: '/random', title: 'Random' },
  { path: '/changelog', title: 'Changelog' },
];

type Route = {
  id: string,
  path: string,
  hidden?: true,
  children?: string[],
};

export const routes: Route[] = [
  {
    id: 'home',
    path: '/',
  },
  { id: 'traits', path: '/traits', children: ['random'] },
  { id: 'alltraits', path: '/traits/all', hidden: true },
  { id: 'random', path: '/random', hidden: true },
  { id: 'legacy', path: '/random/legacy', hidden: true },
  { id: 'changelog', path: '/changelog', hidden: true },
];

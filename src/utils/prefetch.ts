// Simple route prefetch mapping using dynamic imports
const prefetchMap: Record<string, () => Promise<unknown>> = {
  '/': () => import('../pages/Home'),
  '/explore': () => import('../pages/Explore'),
  '/notifications': () => import('../pages/Notifications'),
  '/messages': () => import('../pages/Messages'),
  '/bookmarks': () => import('../pages/Bookmarks'),
  '/communities': () => import('../pages/Communities'),
  '/grok': () => import('../pages/Grok'),
  '/profile': () => import('../pages/Profile'),
  '/settings': () => import('../pages/Settings'),
};

export function prefetchRoute(path: string) {
  const loader = prefetchMap[path];
  if (loader) loader().catch(() => {});
}
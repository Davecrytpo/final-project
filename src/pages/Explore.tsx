import React from 'react';
import { Search } from 'lucide-react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { generateTrends, type TrendCategory, type TrendItem } from '../mocks/trends';

const TRENDING_CATEGORIES: TrendCategory[] = ['For you', 'Trending', 'News', 'Sports', 'Entertainment'];

export default function Explore() {
  const [activeCategory, setActiveCategory] = React.useState<TrendCategory>('For you');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState<TrendItem[]>([]);
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    setItems([]);
    setOffset(0);
    const initial = generateTrends(activeCategory, 0, 8);
    const t = setTimeout(() => {
      setItems(initial);
      setOffset(8);
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const loadMore = React.useCallback(() => {
    if (loading) return;
    setLoading(true);
    const next = generateTrends(activeCategory, offset, 6);
    setTimeout(() => {
      setItems(prev => [...prev, ...next]);
      setOffset(o => o + 6);
      setLoading(false);
    }, 400);
  }, [loading, activeCategory, offset]);

  const sentinelRef = useInfiniteScroll<HTMLDivElement>({ onIntersect: loadMore, disabled: loading });

  return (
    <div>
      {/* Search header */}
      <div className="sticky top-0 bg-black z-10">
        <div className="flex items-center p-4 space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-gray-900 rounded-full py-2.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 hover:bg-gray-900 rounded-full" aria-label="Search settings">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.028-2.29-2.29S10.738 9.71 12 9.71s2.29 1.028 2.29 2.29-1.028 2.29-2.29 2.29z" />
            </svg>
          </button>
        </div>

        {/* Categories */}
        <div className="flex space-x-4 px-4 border-b border-gray-800 overflow-x-auto">
          {TRENDING_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-4 px-4 relative whitespace-nowrap ${
                activeCategory === category
                  ? 'font-bold'
                  : 'text-gray-500 hover:bg-gray-900'
              }`}
            >
              {category}
              {activeCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Category content */}
      <div className="divide-y divide-gray-800">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="p-4 hover:bg-gray-900/50 cursor-pointer flex justify-between items-start"
          >
            <div>
              <div className="text-sm text-gray-500">{item.category}</div>
              <div className="font-bold text-lg mt-0.5">{item.title}</div>
              <div className="text-sm text-gray-500">{item.posts} posts</div>
            </div>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="w-16 h-16 rounded-2xl object-cover"
              />
            )}
          </div>
        ))}
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div key={`sk-${i}`} className="p-4 hover:bg-gray-900/50 flex justify-between items-start animate-pulse">
            <div className="space-y-2">
              <div className="h-3 w-24 bg-gray-800 rounded" />
              <div className="h-4 w-40 bg-gray-800 rounded" />
              <div className="h-3 w-20 bg-gray-800 rounded" />
            </div>
            <div className="w-16 h-16 bg-gray-800 rounded-2xl" />
          </div>
        ))}
        <div ref={sentinelRef} />
      </div>
    </div>
  );
}

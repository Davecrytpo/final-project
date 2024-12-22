import React from 'react';
import { Search } from 'lucide-react';

const TRENDING_CATEGORIES = ['For you', 'Trending', 'News', 'Sports', 'Entertainment'];

const CATEGORY_CONTENT = {
  'For you': [
    {
      category: 'Technology · Trending',
      title: 'Artificial Intelligence',
      posts: '200K',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300',
    },
    {
      category: 'Business · Trending',
      title: 'Cryptocurrency',
      posts: '150K',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=300',
    },
  ],
  'Trending': [
    {
      category: 'Entertainment · Trending',
      title: '#NewMovie2024',
      posts: '300K',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=300',
    },
    {
      category: 'Music · Trending',
      title: 'New Album Release',
      posts: '250K',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300',
    },
  ],
  'News': [
    {
      category: 'World News · Live',
      title: 'Breaking: Major Scientific Discovery',
      posts: '500K',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=300',
    },
    {
      category: 'Politics · Trending',
      title: 'Global Summit 2024',
      posts: '400K',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=300',
    },
  ],
  'Sports': [
    {
      category: 'Football · Live',
      title: 'Champions League Finals',
      posts: '1M',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=300',
    },
    {
      category: 'Olympics · Trending',
      title: 'Summer Olympics 2024',
      posts: '800K',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=300',
    },
  ],
  'Entertainment': [
    {
      category: 'Movies · Trending',
      title: 'Oscar Nominations 2024',
      posts: '450K',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=300',
    },
    {
      category: 'TV Shows · Popular',
      title: 'New Season Premiere',
      posts: '350K',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=300',
    },
  ],
};

export default function Explore() {
  const [activeCategory, setActiveCategory] = React.useState('For you');
  const [searchQuery, setSearchQuery] = React.useState('');

  const currentContent = CATEGORY_CONTENT[activeCategory as keyof typeof CATEGORY_CONTENT];

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
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.028-2.29-2.29S10.738 9.71 12 9.71s2.29 1.028 2.29 2.29-1.028 2.29-2.29 2.29z"
              />
              <path
                fill="currentColor"
                d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.032.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"
              />
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
        {currentContent.map((item, index) => (
          <div
            key={index}
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
                className="w-16 h-16 rounded-2xl object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
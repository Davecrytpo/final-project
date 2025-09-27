import React from 'react';
import { Search } from 'lucide-react';
import { SUGGESTED } from '../mocks/suggested';

export default function TrendingSidebar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <aside className="hidden xl:block w-[350px] p-4 fixed right-0 h-screen overflow-y-auto">
      <div className="sticky top-0 bg-black pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            data-search-input="true"
            className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-800 p-4">
          <h2 className="text-xl font-bold mb-4">What's happening</h2>
          {/* Trending content placeholder */}
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Trending · Topic</div>
                  <div className="font-bold">Sample Trend {i + 1}</div>
                  <div className="text-sm text-gray-500">{(i + 1) * 10}K posts</div>
                </div>
                <div className="h-12 w-12 bg-gray-900 rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 p-4">
          <h2 className="text-xl font-bold mb-4">Who to follow</h2>
          <div className="space-y-3">
            {SUGGESTED.map((u) => (
              <div key={u.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={u.avatar} alt={u.name} width={40} height={40} className="h-10 w-10 rounded-full" />
                  <div>
                    <div className="font-bold leading-tight">{u.name}</div>
                    <div className="text-gray-500 text-sm leading-tight">@{u.username}</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200">Follow</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

import React from 'react';
import { Search } from 'lucide-react';

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
            className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-800 p-4">
          <h2 className="text-xl font-bold mb-4">What's happening</h2>
          {/* Trending content */}
        </div>

        <div className="rounded-2xl border border-gray-800 p-4">
          <h2 className="text-xl font-bold mb-4">Who to follow</h2>
          {/* Suggested follows */}
        </div>
      </div>
    </aside>
  );
}
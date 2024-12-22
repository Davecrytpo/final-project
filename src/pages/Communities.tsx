import React, { useState } from 'react';
import { Users, Plus, Search } from 'lucide-react';

const COMMUNITIES = [
  {
    id: 1,
    name: 'Tech Enthusiasts',
    members: '245K',
    description: 'A community for discussing the latest in technology',
    banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 2,
    name: 'Startup Founders',
    members: '128K',
    description: 'Connect with fellow entrepreneurs and share experiences',
    banner: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000',
    avatar: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 3,
    name: 'Developer Hub',
    members: '189K',
    description: 'Share code, get help, and discuss programming',
    banner: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    avatar: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=100&h=100',
  },
];

export default function Communities() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="p-4">
          <h1 className="text-xl font-bold">Communities</h1>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Communities"
              className="w-full bg-gray-900 rounded-full py-2.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Create Community Button */}
      <div className="p-4 border-b border-gray-800">
        <button className="flex items-center space-x-3 w-full bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-6 transition-colors">
          <Users className="h-6 w-6" />
          <span className="font-bold">Create a Community</span>
          <Plus className="h-5 w-5 ml-auto" />
        </button>
      </div>

      {/* Communities List */}
      <div className="divide-y divide-gray-800">
        {COMMUNITIES.map((community) => (
          <div
            key={community.id}
            className="hover:bg-gray-900/50 cursor-pointer transition-colors"
          >
            {/* Banner */}
            <div className="h-32 relative">
              <img
                src={community.banner}
                alt={community.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 transform translate-y-1/2 left-4">
                <img
                  src={community.avatar}
                  alt={community.name}
                  className="w-16 h-16 rounded-2xl border-4 border-black"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 pt-12">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{community.name}</h2>
                  <div className="text-gray-500">{community.members} members</div>
                </div>
                <button className="px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                  Join
                </button>
              </div>
              <p className="mt-2 text-gray-300">{community.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
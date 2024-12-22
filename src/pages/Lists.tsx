import React from 'react';
import { Plus, Settings, PinIcon } from 'lucide-react';

const LISTS = [
  {
    id: 1,
    name: 'Tech News',
    description: 'Latest updates from the tech world',
    memberCount: 125,
    isPinned: true,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Startup Founders',
    description: 'Following innovative entrepreneurs',
    memberCount: 89,
    isPinned: true,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Developer Community',
    description: 'Software developers and engineers',
    memberCount: 256,
    isPinned: false,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Lists() {
  const [tab, setTab] = React.useState<'owned' | 'following'>('owned');

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-xl font-bold">Lists</h1>
            <p className="text-sm text-gray-500">@janedoe</p>
          </div>
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
        </div>
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setTab('owned')}
            className={`flex-1 py-4 hover:bg-gray-900 relative ${
              tab === 'owned' ? 'font-bold' : ''
            }`}
          >
            Your Lists
            {tab === 'owned' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setTab('following')}
            className={`flex-1 py-4 hover:bg-gray-900 relative ${
              tab === 'following' ? 'font-bold' : ''
            }`}
          >
            Following
            {tab === 'following' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Create List Button */}
      <div className="p-4 border-b border-gray-800">
        <button className="flex items-center justify-center space-x-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-4 font-bold transition-colors">
          <Plus className="h-5 w-5" />
          <span>Create new List</span>
        </button>
      </div>

      {/* Pinned Lists */}
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-bold text-xl mb-4">Pinned Lists</h2>
        <div className="space-y-4">
          {LISTS.filter(list => list.isPinned).map(list => (
            <div
              key={list.id}
              className="flex items-start space-x-4 hover:bg-gray-900/50 p-4 rounded-xl cursor-pointer transition-colors"
            >
              <img
                src={list.image}
                alt={list.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{list.name}</h3>
                  <PinIcon className="h-4 w-4 text-blue-500" />
                </div>
                <p className="text-gray-500 text-sm">{list.description}</p>
                <p className="text-gray-500 text-sm mt-1">{list.memberCount} members</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Lists */}
      <div className="p-4">
        <h2 className="font-bold text-xl mb-4">Your Lists</h2>
        <div className="space-y-4">
          {LISTS.map(list => (
            <div
              key={list.id}
              className="flex items-start space-x-4 hover:bg-gray-900/50 p-4 rounded-xl cursor-pointer transition-colors"
            >
              <img
                src={list.image}
                alt={list.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{list.name}</h3>
                  {list.isPinned && <PinIcon className="h-4 w-4 text-blue-500" />}
                </div>
                <p className="text-gray-500 text-sm">{list.description}</p>
                <p className="text-gray-500 text-sm mt-1">{list.memberCount} members</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
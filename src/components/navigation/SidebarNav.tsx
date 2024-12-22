import React from 'react';
import { Twitter, Settings } from 'lucide-react';
import { User } from '../../types';
import NavigationMenu from './NavigationMenu';

interface SidebarNavProps {
  user: User | null;
  onNavigate: (path: string) => void;
  onPostClick: () => void;
}

export default function SidebarNav({ user, onNavigate, onPostClick }: SidebarNavProps) {
  return (
    <aside className="hidden md:flex flex-col fixed h-screen w-64 p-4 border-r border-gray-800">
      <div className="p-2 mb-4">
        <Twitter className="h-8 w-8 text-white" />
      </div>

      <NavigationMenu onNavigate={onNavigate} />

      <button
        onClick={onPostClick}
        className="w-full bg-blue-500 text-white rounded-full py-3 px-4 font-bold hover:bg-blue-600 transition-colors mt-4"
      >
        Post
      </button>

      {user && (
        <div className="mt-auto">
          <button
            onClick={() => onNavigate('/profile')}
            className="flex items-center space-x-3 p-3 w-full rounded-full hover:bg-gray-900 transition-colors"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 text-left">
              <div className="font-bold">{user.name}</div>
              <div className="text-gray-500">@{user.username}</div>
            </div>
            <Settings className="h-5 w-5" />
          </button>
        </div>
      )}
    </aside>
  );
}
import React from 'react';
import { Menu, Twitter } from 'lucide-react';
import { User } from '../../types';

interface MobileHeaderProps {
  user: User | null;
  onMenuClick: () => void;
}

export default function MobileHeader({ user, onMenuClick }: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-900 rounded-full"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Twitter className="h-6 w-6" />
        {user && (
          <img
            src={user.avatar}
            alt={user.name}
            className="h-8 w-8 rounded-full"
          />
        )}
      </div>
    </div>
  );
}
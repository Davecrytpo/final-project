
import { Menu } from 'lucide-react';
import { User } from '../../types';
import Logo from '../shared/Logo';

interface MobileHeaderProps {
  user: User | null;
  onMenuClick: () => void;
}

import { useCompose } from '../../contexts/ComposeContext';

export default function MobileHeader({ user, onMenuClick }: MobileHeaderProps) {
  const { open } = useCompose();
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-900 rounded-full"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Logo className="h-6 w-6" />
        {user ? (
          <img
            src={user.avatar}
            alt={user.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <button
            onClick={open}
            className="px-3 py-1.5 rounded-full bg-blue-500 text-white text-sm font-bold"
          >
            Post
          </button>
        )}
      </div>
    </div>
  );
}
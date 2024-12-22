
import { Menu, Twitter } from 'lucide-react';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export default function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-40 border-b border-gray-800">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-900 rounded-full"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Twitter className="h-6 w-6" />
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
}
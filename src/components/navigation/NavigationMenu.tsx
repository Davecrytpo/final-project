
import { useLocation } from 'react-router-dom';
import {
  Home, Bell, Search, Mail, User, Users,
  Bookmark, ListChecks
} from 'lucide-react';
import MenuItem from './MenuItem';

export const MENU_ITEMS = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Search, label: 'Explore', path: '/explore' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: ListChecks, label: 'Lists', path: '/lists' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: Users, label: 'Communities', path: '/communities' },
  { icon: User, label: 'Profile', path: '/profile' },
];

interface NavigationMenuProps {
  onNavigate: (path: string) => void;
  className?: string;
}

export default function NavigationMenu({ onNavigate, className = '' }: NavigationMenuProps) {
  const location = useLocation();

  return (
    <nav className={`flex-1 ${className}`}>
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={location.pathname === item.path}
          onClick={() => onNavigate(item.path)}
        />
      ))}
    </nav>
  );
}
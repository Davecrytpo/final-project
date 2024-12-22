import { Home, Search, Bell, Mail, Bookmark, Users, User, Settings, Bot } from 'lucide-react';
import type { IconType } from './types';

export const MENU_ITEMS = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Explore', path: '/explore' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: Users, label: 'Communities', path: '/communities' },
  { icon: Bot, label: 'Grok', path: '/grok' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
] as const;

export const AVATAR_PLACEHOLDER = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100';

export const HOME_TABS = ['For you', 'Following'] as const;
export const EXPLORE_TABS = ['For you', 'Trending', 'News', 'Sports', 'Entertainment'] as const;
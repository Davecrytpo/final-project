import { LucideIcon } from 'lucide-react';

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified?: boolean;
}

export interface Tweet {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  replies: number;
  reposts: number;
  views: number;
  images?: string[];
}

export interface TrendingTopic {
  category: string;
  title: string;
  posts: string;
}

export type IconType = LucideIcon;

export interface MenuItem {
  icon: IconType;
  label: string;
  path: string;
}
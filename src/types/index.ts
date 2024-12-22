export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  followers: number;
  following: number;
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

export interface Message {
  id: string;
  sender: User;
  recipient: User;
  content: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'reply' | 'repost' | 'follow' | 'mention';
  actor: User;
  tweet?: Tweet;
  timestamp: string;
}
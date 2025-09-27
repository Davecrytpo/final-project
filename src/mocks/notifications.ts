import type { Notification, User } from '../types';

const USERS: User[] = [
  {
    id: 'u1',
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
    followers: 12000,
    following: 300,
  },
  {
    id: 'u2',
    name: 'Jane Smith',
    username: 'janesmith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    verified: false,
    followers: 800,
    following: 150,
  },
  {
    id: 'u3',
    name: 'Dev Community',
    username: 'devcommunity',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
    followers: 220000,
    following: 1200,
  },
];

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TYPES: Notification['type'][] = ['like', 'reply', 'repost', 'follow', 'mention'];

export function generateNotifications(kind: 'All' | 'Verified' | 'Mentions', offset: number, limit: number): Notification[] {
  const out: Notification[] = [];
  for (let i = 0; i < limit; i++) {
    const user = USERS[(offset + i) % USERS.length];
    const baseType = TYPES[(offset + i) % TYPES.length];
    let type: Notification['type'] = baseType;
    if (kind === 'Verified') type = 'like';
    if (kind === 'Mentions') type = 'mention';

    out.push({
      id: `${kind}-${offset + i}`,
      type,
      actor: user,
      tweet: Math.random() < 0.5 ? { id: 't', content: 'Great work!', author: user, createdAt: 'now', likes: 0, replies: 0, reposts: 0, views: 0 } as any : undefined,
      timestamp: `${randInt(1,59)}m`
    });
  }
  return out;
}
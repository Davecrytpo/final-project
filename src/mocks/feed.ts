import type { Tweet, User } from '../types';

const AUTHORS: User[] = [
  {
    id: 'a1',
    name: 'Tech Company',
    username: 'techcompany',
    avatar: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
    followers: 50000,
    following: 1200,
  },
  {
    id: 'a2',
    name: 'Jane Developer',
    username: 'janedev',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    verified: true,
    followers: 25000,
    following: 500,
  },
];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomImage(w = 800, h = 600) {
  const id = randomInt(100, 999);
  return `https://images.unsplash.com/photo-1677${id}2136019-21780ecad995?auto=format&fit=crop&q=80&w=${w}&h=${h}`;
}

export function generateTweets(kind: 'for-you' | 'following', offset: number, limit: number): Tweet[] {
  const tweets: Tweet[] = [];
  for (let i = 0; i < limit; i++) {
    const id = `${kind}-${offset + i}`;
    const author = AUTHORS[(offset + i) % AUTHORS.length];
    const imagesCount = Math.random() < 0.35 ? randomInt(1, 3) : 0;
    tweets.push({
      id,
      content:
        kind === 'for-you'
          ? 'Breaking: new AI features rolling out. What do you think? #AI'
          : 'Building a new project with Vite + React. Loving the DX! #webdev',
      author,
      createdAt: `${randomInt(1, 59)}m`,
      likes: randomInt(10, 5000),
      replies: randomInt(0, 900),
      reposts: randomInt(0, 1200),
      views: randomInt(500, 500000),
      images: imagesCount
        ? Array.from({ length: imagesCount }).map(() => randomImage(imagesCount === 1 ? 1200 : 600, imagesCount === 1 ? 700 : 600))
        : undefined,
    });
  }
  return tweets;
}
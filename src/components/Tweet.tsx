import React from 'react';
import { MessageCircle, Repeat2, Heart, BarChart2, Share } from 'lucide-react';
import type { Tweet as TweetType } from '../types';

interface TweetProps {
  tweet: TweetType;
}

export default function Tweet({ tweet }: TweetProps) {
  const [liked, setLiked] = React.useState(false);

  const actions = [
    {
      icon: MessageCircle,
      count: tweet.replies,
      onClick: () => {},
      color: 'text-gray-500 hover:text-blue-500',
    },
    {
      icon: Repeat2,
      count: tweet.reposts,
      onClick: () => {},
      color: 'text-gray-500 hover:text-green-500',
    },
    {
      icon: Heart,
      count: tweet.likes,
      onClick: () => setLiked(!liked),
      color: liked ? 'text-pink-600' : 'text-gray-500 hover:text-pink-600',
    },
    {
      icon: BarChart2,
      count: tweet.views,
      onClick: () => {},
      color: 'text-gray-500 hover:text-blue-500',
    },
  ];

  return (
    <article className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
      <div className="flex space-x-3">
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="h-12 w-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold hover:underline">{tweet.author.name}</span>
            {tweet.author.verified && (
              <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                />
              </svg>
            )}
            <span className="text-gray-500">@{tweet.author.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{tweet.createdAt}</span>
          </div>
          <p className="mt-2 text-white">{tweet.content}</p>
          {tweet.images && tweet.images.length > 0 && (
            <div className={`grid gap-2 mt-3 ${
              tweet.images.length === 1 ? 'grid-cols-1' :
              tweet.images.length === 2 ? 'grid-cols-2' :
              tweet.images.length === 3 ? 'grid-cols-2' :
              'grid-cols-2'
            }`}>
              {tweet.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="rounded-2xl w-full h-full object-cover"
                  style={{ maxHeight: '512px' }}
                />
              ))}
            </div>
          )}
          <div className="flex justify-between mt-4 max-w-md">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`flex items-center space-x-2 group ${action.color}`}
              >
                <div className="p-2 rounded-full group-hover:bg-opacity-10 group-hover:bg-current">
                  <action.icon className="h-5 w-5" />
                </div>
                <span>{action.count}</span>
              </button>
            ))}
            <button className="p-2 rounded-full hover:bg-blue-500/10 text-gray-500 hover:text-blue-500">
              <Share className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
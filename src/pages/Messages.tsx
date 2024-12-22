import React from 'react';
import { Search, Settings, Edit } from 'lucide-react';

const MESSAGES = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    lastMessage: 'Hey, how are you?',
    time: '2h',
    unread: true,
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
      verified: false,
    },
    lastMessage: 'The project looks great!',
    time: '1d',
    unread: false,
  },
];

export default function Messages() {
  return (
    <div>
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-900 rounded-full">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-900 rounded-full">
              <Edit className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Direct Messages"
              className="w-full bg-gray-900 rounded-full py-2.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-800">
        {MESSAGES.map((message) => (
          <div
            key={message.id}
            className="p-4 hover:bg-gray-900/50 cursor-pointer flex items-start space-x-4"
          >
            <img
              src={message.user.avatar}
              alt={message.user.name}
              className="h-12 w-12 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-bold truncate">{message.user.name}</span>
                {message.user.verified && (
                  <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                    />
                  </svg>
                )}
                <span className="text-gray-500">@{message.user.username}</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500">{message.time}</span>
              </div>
              <div className={`mt-1 ${message.unread ? 'font-semibold' : 'text-gray-500'}`}>
                {message.lastMessage}
              </div>
            </div>
            {message.unread && (
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
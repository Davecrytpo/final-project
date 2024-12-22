import React from 'react';
import { MessageCircle, Heart, Repeat2, UserPlus, Settings, AtSign } from 'lucide-react';

const TABS = ['All', 'Verified', 'Mentions'];

const ALL_NOTIFICATIONS = [
  {
    id: 1,
    type: 'like',
    user: {
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    content: 'liked your post',
    time: '2h',
    tweet: 'Just launched my new project! Check it out! 🚀',
  },
  {
    id: 2,
    type: 'reply',
    user: {
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
      verified: false,
    },
    content: 'replied to your post',
    time: '4h',
    tweet: 'Amazing work! Keep it up! 👏',
  },
  {
    id: 3,
    type: 'repost',
    user: {
      name: 'Alice Johnson',
      username: 'alicej',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    content: 'reposted your post',
    time: '6h',
  },
  {
    id: 4,
    type: 'follow',
    user: {
      name: 'Bob Wilson',
      username: 'bobwilson',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100&h=100',
      verified: false,
    },
    content: 'followed you',
    time: '8h',
  },
];

const VERIFIED_NOTIFICATIONS = [
  {
    id: 5,
    type: 'like',
    user: {
      name: 'Tech Company',
      username: 'techcompany',
      avatar: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    content: 'liked your post',
    time: '1h',
    tweet: 'Excited to start using the new AI features! 🤖',
  },
  {
    id: 6,
    type: 'reply',
    user: {
      name: 'Famous Dev',
      username: 'famousdev',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    content: 'replied to your post',
    time: '3h',
    tweet: 'Great implementation! Would love to collaborate sometime.',
  },
];

const MENTIONS_NOTIFICATIONS = [
  {
    id: 7,
    type: 'mention',
    user: {
      name: 'Sarah Wilson',
      username: 'sarahw',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    content: 'mentioned you',
    time: '30m',
    tweet: 'Hey @janedoe, check out this amazing new framework!',
  },
  {
    id: 8,
    type: 'mention',
    user: {
      name: 'Dev Community',
      username: 'devcommunity',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
    },
    content: 'mentioned you',
    time: '5h',
    tweet: 'Congratulations to @janedoe for winning the hackathon! 🏆',
  },
];

const NotificationIcon = ({ type }: { type: string }) => {
  const iconClass = "h-5 w-5";
  
  switch (type) {
    case 'like':
      return <Heart className={iconClass} />;
    case 'reply':
      return <MessageCircle className={iconClass} />;
    case 'repost':
      return <Repeat2 className={iconClass} />;
    case 'follow':
      return <UserPlus className={iconClass} />;
    case 'mention':
      return <AtSign className={iconClass} />;
    default:
      return null;
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case 'like':
      return 'bg-pink-500/10 text-pink-500';
    case 'reply':
      return 'bg-blue-500/10 text-blue-500';
    case 'repost':
      return 'bg-green-500/10 text-green-500';
    case 'follow':
      return 'bg-blue-500/10 text-blue-500';
    case 'mention':
      return 'bg-purple-500/10 text-purple-500';
    default:
      return 'bg-gray-500/10 text-gray-500';
  }
};

export default function Notifications() {
  const [activeTab, setActiveTab] = React.useState('All');

  const getNotifications = () => {
    switch (activeTab) {
      case 'Verified':
        return VERIFIED_NOTIFICATIONS;
      case 'Mentions':
        return MENTIONS_NOTIFICATIONS;
      default:
        return ALL_NOTIFICATIONS;
    }
  };

  const currentNotifications = getNotifications();

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Notifications</h1>
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
        </div>
        <div className="flex border-b border-gray-800">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 hover:bg-gray-900 relative ${
                activeTab === tab ? 'font-bold' : ''
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {currentNotifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
            <Bell className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Nothing to see here — yet</h2>
          <p className="text-gray-500 max-w-sm">
            When there's new notifications, they'll show up here.
          </p>
        </div>
      ) : (
        /* Notifications List */
        <div className="divide-y divide-gray-800">
          {currentNotifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 hover:bg-gray-900/50 cursor-pointer transition-colors"
            >
              <div className="flex space-x-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconBackground(notification.type)}`}>
                  <NotificationIcon type={notification.type} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <img
                      src={notification.user.avatar}
                      alt={notification.user.name}
                      className="h-5 w-5 rounded-full"
                    />
                    <span className="font-bold truncate hover:underline">
                      {notification.user.name}
                    </span>
                    {notification.user.verified && (
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                        />
                      </svg>
                    )}
                    <span className="text-gray-500">{notification.content}</span>
                  </div>
                  {notification.tweet && (
                    <p className="mt-2 text-gray-500">{notification.tweet}</p>
                  )}
                  <span className="text-gray-500 text-sm mt-1 block">
                    {notification.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileTabs from '../components/ProfileTabs';
import Tweet from '../components/Tweet';
import { Tweet as TweetType } from '../types';

const PROFILE = {
  name: 'Jane Doe',
  username: 'janedoe',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
  banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80',
  bio: 'Senior Software Engineer @Twitter | Open Source Enthusiast | Building cool stuff with React & Node.js | Photography lover 📸 | Travel addict ✈️',
  location: 'San Francisco, CA',
  website: 'https://janedoe.dev',
  joinDate: 'Joined March 2019',
  following: 890,
  followers: 15200,
  verified: true,
  postsCount: 3420,
};

const PROFILE_TWEETS: TweetType[] = [
  {
    id: '1',
    content: 'Just deployed a new feature using React 18! The new concurrent features are amazing 🚀 #ReactJS #WebDev',
    author: {
      id: PROFILE.username,
      name: PROFILE.name,
      username: PROFILE.username,
      avatar: PROFILE.avatar,
      verified: PROFILE.verified,
      followers: PROFILE.followers,
      following: PROFILE.following,
    },
    createdAt: '2h',
    likes: 1234,
    replies: 89,
    reposts: 234,
    views: 12400,
  },
  {
    id: '2',
    content: 'Beautiful sunset view from our office today! 🌅',
    author: {
      id: PROFILE.username,
      name: PROFILE.name,
      username: PROFILE.username,
      avatar: PROFILE.avatar,
      verified: PROFILE.verified,
      followers: PROFILE.followers,
      following: PROFILE.following,
    },
    createdAt: '1d',
    likes: 2345,
    replies: 123,
    reposts: 456,
    views: 23500,
    images: [
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000',
    ],
  },
  {
    id: '3',
    content: 'Excited to announce that I\'ll be speaking at #ReactConf2024! Join me for a deep dive into React Server Components and the future of web development. See you there! 🎤',
    author: {
      id: PROFILE.username,
      name: PROFILE.name,
      username: PROFILE.username,
      avatar: PROFILE.avatar,
      verified: PROFILE.verified,
      followers: PROFILE.followers,
      following: PROFILE.following,
    },
    createdAt: '2d',
    likes: 3456,
    replies: 234,
    reposts: 567,
    views: 45600,
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState('Posts');
  const [tweets, setTweets] = React.useState(PROFILE_TWEETS);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // In a real app, we would fetch different content based on the active tab
    // For now, we'll just show the same tweets for all tabs
  };

  return (
    <div>
      <ProfileHeader profile={PROFILE} />
      <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="divide-y divide-gray-800">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
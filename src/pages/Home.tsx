import React, { useState } from 'react';
import { Settings, Image, Smile, Calendar, MapPin } from 'lucide-react';
import Tweet from '../components/Tweet';
import { Tweet as TweetType } from '../types';

const FOR_YOU_TWEETS: TweetType[] = [
  {
    id: '1',
    content: 'Just launched our new AI feature! Check it out 🚀 #AI #Technology',
    author: {
      id: '1',
      name: 'Tech Company',
      username: 'techcompany',
      avatar: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
      followers: 50000,
      following: 1200,
    },
    createdAt: '2h',
    likes: 1234,
    replies: 89,
    reposts: 234,
    views: 12400,
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'],
  },
  // Add more tweets...
];

const FOLLOWING_TWEETS: TweetType[] = [
  {
    id: '2',
    content: 'Working on something exciting! Stay tuned 👀 #WebDev',
    author: {
      id: '2',
      name: 'Jane Developer',
      username: 'janedev',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
      followers: 25000,
      following: 500,
    },
    createdAt: '1h',
    likes: 456,
    replies: 23,
    reposts: 45,
    views: 5600,
  },
  // Add more tweets...
];

export default function Home() {
  const [tab, setTab] = useState<'for-you' | 'following'>('for-you');
  const [newTweet, setNewTweet] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const tweets = tab === 'for-you' ? FOR_YOU_TWEETS : FOLLOWING_TWEETS;

  const handlePost = () => {
    if (!newTweet.trim() && selectedImages.length === 0) return;
    // Handle post creation
    setNewTweet('');
    setSelectedImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Convert files to URLs
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setSelectedImages(prev => [...prev, ...urls]);
    }
  };

  return (
    <div>
      <header className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Home</h1>
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
        </div>
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setTab('for-you')}
            className={`flex-1 py-4 hover:bg-gray-900 relative ${
              tab === 'for-you' ? 'font-bold' : ''
            }`}
          >
            For you
            {tab === 'for-you' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setTab('following')}
            className={`flex-1 py-4 hover:bg-gray-900 relative ${
              tab === 'following' ? 'font-bold' : ''
            }`}
          >
            Following
            {tab === 'following' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
        </div>
      </header>

      <div className="p-4 border-b border-gray-800">
        <div className="flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newTweet}
              onChange={(e) => setNewTweet(e.target.value)}
              placeholder="What's happening?!"
              className="w-full bg-transparent text-xl outline-none resize-none placeholder-gray-600"
              rows={3}
            />
            
            {selectedImages.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {selectedImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt=""
                    className="rounded-2xl w-full h-48 object-cover"
                  />
                ))}
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                <label className="p-2 hover:bg-blue-500/10 rounded-full text-blue-500 cursor-pointer">
                  <Image className="h-5 w-5" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                </label>
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="p-2 hover:bg-blue-500/10 rounded-full text-blue-500"
                >
                  <Smile className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-500/10 rounded-full text-blue-500">
                  <Calendar className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-blue-500/10 rounded-full text-blue-500">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={handlePost}
                disabled={!newTweet.trim() && selectedImages.length === 0}
                className="bg-blue-500 text-white rounded-full px-4 py-2 font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-800">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Settings, Image, Smile, Calendar, MapPin } from 'lucide-react';
import Tweet from '../components/Tweet';
import { Tweet as TweetType } from '../types';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { generateTweets } from '../mocks/feed';



export default function Home() {
  const [tab, setTab] = useState<'for-you' | 'following'>('for-you');
  const [newTweet, setNewTweet] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [feed, setFeed] = useState<TweetType[]>([]);
  const [offset, setOffset] = useState(0);

  React.useEffect(() => {
    setLoading(true);
    setFeed([]);
    setOffset(0);
    const initial = generateTweets(tab, 0, 10);
    const t = setTimeout(() => {
      setFeed(initial);
      setOffset(10);
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, [tab]);

  const loadMore = React.useCallback(() => {
    if (loading) return;
    setLoading(true);
    const next = generateTweets(tab, offset, 10);
    setTimeout(() => {
      setFeed((prev) => [...prev, ...next]);
      setOffset((o) => o + 10);
      setLoading(false);
    }, 500);
  }, [loading, tab, offset]);

  const sentinelRef = useInfiniteScroll<HTMLDivElement>({ onIntersect: loadMore, disabled: loading });

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
            width={48}
            height={48}
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
              <div className={`grid gap-2 mt-2 ${selectedImages.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {selectedImages.map((url, index) => (
                  <div key={index} className={`${selectedImages.length === 1 ? 'aspect-[16/9]' : 'aspect-square'} overflow-hidden rounded-2xl`}>
                    <img src={url} alt="" className="w-full h-full object-cover" />
                  </div>
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
        {feed.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
        {(loading || feed.length === 0) &&
          Array.from({ length: feed.length === 0 ? 6 : 2 }).map((_, i) => (
            <div key={`sk-${i}`} className="p-4 border-b border-gray-800 animate-pulse">
              <div className="flex space-x-3">
                <div className="h-12 w-12 rounded-full bg-gray-800" />
                <div className="flex-1 space-y-3">
                  <div className="h-4 w-1/3 bg-gray-800 rounded" />
                  <div className="h-4 w-2/3 bg-gray-800 rounded" />
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="aspect-square bg-gray-800 rounded-2xl" />
                    <div className="aspect-square bg-gray-800 rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div ref={sentinelRef} />
      </div>
    </div>
  );
}
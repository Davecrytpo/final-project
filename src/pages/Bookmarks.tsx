import { Settings, Share2 } from 'lucide-react';
import Tweet from '../components/Tweet';

const BOOKMARKED_TWEETS = [
  {
    id: '1',
    content: 'Just launched our new AI feature! Check it out at https://example.com 🚀 #AI #Technology',
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
  {
    id: '2',
    content: '10 Tips for Better Code Quality:\n\n1. Write Clean Code\n2. Use Meaningful Names\n3. Keep Functions Small\n4. Write Tests\n5. Review Your Code\n6. Use Version Control\n7. Document Well\n8. Follow Standards\n9. Refactor Regularly\n10. Get Code Reviews',
    author: {
      id: '2',
      name: 'Developer Tips',
      username: 'devtips',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
      verified: true,
      followers: 25000,
      following: 500,
    },
    createdAt: '5h',
    likes: 3456,
    replies: 234,
    reposts: 567,
    views: 45600,
  },
];

export default function Bookmarks() {
  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-xl font-bold">Bookmarks</h1>
            <p className="text-sm text-gray-500">@janedoe</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-900 rounded-full">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-900 rounded-full">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {BOOKMARKED_TWEETS.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Save Tweets for later</h2>
          <p className="text-gray-500 max-w-sm">
            Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.
          </p>
        </div>
      ) : (
        /* Bookmarked Tweets */
        <div className="divide-y divide-gray-800">
          {BOOKMARKED_TWEETS.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      )}
    </div>
  );
}
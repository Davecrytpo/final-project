import React from 'react';
import { X } from 'lucide-react';
import { User } from '../../types';

interface PostModalProps {
  onClose: () => void;
  onPost: () => void;
  user: User | null;
  newPost: string;
  setNewPost: (value: string) => void;
}

export default function PostModal({ onClose, onPost, user, newPost, setNewPost }: PostModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black w-full max-w-lg rounded-2xl border border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-900 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={onPost}
            disabled={!newPost.trim()}
            className="bg-blue-500 text-white rounded-full px-4 py-1.5 font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
        <div className="p-4">
          <div className="flex space-x-4">
            {user && (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-full"
              />
            )}
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What is happening?!"
              className="flex-1 bg-transparent text-xl outline-none resize-none placeholder-gray-600"
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
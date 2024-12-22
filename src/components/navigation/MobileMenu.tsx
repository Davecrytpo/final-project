import React from 'react';
import { X, LogOut } from 'lucide-react';
import { User } from '../../types';
import NavigationMenu from './NavigationMenu';

interface MobileMenuProps {
  onClose: () => void;
  onNavigate: (path: string) => void;
  onLogout: () => void;
  user: User | null;
}

export default function MobileMenu({ onClose, onNavigate, onLogout, user }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 md:hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Account info</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-900 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {user && (
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-bold">{user.name}</div>
                <div className="text-gray-500">@{user.username}</div>
              </div>
            </div>
          </div>
        )}

        <NavigationMenu onNavigate={onNavigate} className="p-4" />

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={onLogout}
            className="flex items-center space-x-4 p-4 w-full text-red-500 hover:bg-gray-900 transition-colors"
          >
            <LogOut className="h-6 w-6" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
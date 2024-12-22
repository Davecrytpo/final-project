import React from 'react';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuItem from './navigation/MenuItem';
import { MENU_ITEMS } from '../utils/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

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

        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="font-bold">Jane Doe</div>
              <div className="text-gray-500">@janedoe</div>
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div>
              <span className="font-bold">890</span>{' '}
              <span className="text-gray-500">Following</span>
            </div>
            <div>
              <span className="font-bold">15.2K</span>{' '}
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              onClick={() => handleNavigation(item.path)}
              isActive={location.pathname === item.path}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
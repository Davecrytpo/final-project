import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Twitter } from 'lucide-react';
import MenuItem from './navigation/MenuItem';
import Button from './shared/Button';
import { MENU_ITEMS } from '../utils/constants';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="fixed h-screen w-[275px] p-4 hidden md:flex flex-col border-r border-gray-800">
      <div className="p-2 mb-4">
        <Twitter className="h-8 w-8" />
      </div>

      <nav className="flex-1 space-y-1">
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            onClick={() => navigate(item.path)}
            isActive={location.pathname === item.path}
          />
        ))}
      </nav>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        className="mb-4"
        onClick={() => {}}
      >
        Post
      </Button>

      <button className="flex items-center space-x-3 p-3 w-full rounded-full hover:bg-gray-900 transition-colors mt-auto">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1 text-left">
          <div className="font-bold">Jane Doe</div>
          <div className="text-gray-500">@janedoe</div>
        </div>
      </button>
    </aside>
  );
}
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function MenuItem({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick, 
  className = '' 
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-4 p-3 w-full rounded-full hover:bg-gray-900 transition-colors ${
        isActive ? 'font-bold' : ''
      } ${className}`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xl">{label}</span>
    </button>
  );
}
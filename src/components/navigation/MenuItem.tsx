
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
  className?: string;
}

export default function MenuItem({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick,
  onMouseEnter,
  className = '' 
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`flex items-center space-x-4 p-3 w-full rounded-full hover:bg-gray-900 transition-colors ${
        isActive ? 'font-bold' : ''
      } ${className}`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xl">{label}</span>
    </button>
  );
}

import React from 'react';

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = ['Posts', 'Replies', 'Highlights', 'Media', 'Likes'];

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div className="border-b border-gray-800">
      <div className="flex">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex-1 py-4 hover:bg-gray-900 relative ${
              activeTab === tab ? 'font-bold' : ''
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
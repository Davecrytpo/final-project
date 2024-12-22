import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TrendingSidebar from './TrendingSidebar';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';

export default function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <MobileHeader onMenuClick={() => setIsMobileNavOpen(true)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
      
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        <main className="flex-1 min-h-screen border-x border-gray-800 md:ml-[275px] xl:mr-[350px] mt-[60px] md:mt-0">
          <Outlet />
        </main>
        <TrendingSidebar />
      </div>
    </div>
  );
}
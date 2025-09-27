import  { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TrendingSidebar from './TrendingSidebar';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';
import PostModal from './post/PostModal';
import { useCompose } from '../contexts/ComposeContext';

export default function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isOpen, close, open } = useCompose();
  const navigate = useNavigate();

  // Keyboard shortcuts: n -> compose, / -> search, g then h -> home
  useEffect(() => {
    let chord: string[] = [];
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.target && (e.target as HTMLElement).tagName === 'TEXTAREA') return;

      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        open();
        return;
      }
      if (e.key === '/') {
        e.preventDefault();
        const input = document.querySelector<HTMLInputElement>('[data-search-input="true"]');
        input?.focus();
        return;
      }
      chord.push(e.key.toLowerCase());
      if (chord.slice(-2).join(' ') === 'g h') {
        navigate('/');
        chord = [];
      }
      // Clear chord after brief delay
      window.setTimeout(() => {
        chord = [];
      }, 1000);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate, open]);

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

      {isOpen && (
        <PostModal
          onClose={close}
          onPost={() => {
            // You can hook into a global feed state here
            close();
          }}
          user={{ id: 'me', name: 'Jane Doe', username: 'janedoe', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100', verified: true, followers: 1000, following: 200 }}
        />
      )}
    </div>
  );
}

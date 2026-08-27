import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, BookOpen, MessageCircleQuestion, Menu } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 w-full bg-secondary border-t border-primary/10 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 px-2 py-2 safe-area-bottom">
      <div className="flex justify-around items-center">
        <NavItem to="/" icon={<Home size={22} />} label="Home" />
        <NavItem to="/search" icon={<Search size={22} />} label="Search" />
        <NavItem to="/categories" icon={<BookOpen size={22} />} label="Categories" />
        <NavItem to="/ask" icon={<MessageCircleQuestion size={22} />} label="Ask" />
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        flex flex-col items-center justify-center w-16 p-1 rounded-lg transition-colors
        ${isActive ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}
      `}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-[10px]">{label}</span>
    </NavLink>
  );
}

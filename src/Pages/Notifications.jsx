import React, { useMemo, useState } from "react";
import NotificationCard from "../Components/NotificationCard";
import Badge from "../Components/Badge";
import Icon from "../Components/Icon";
import "../index.css";
import {
  FiHome,
  FiAward,
  FiBell,
  FiUsers,
  FiChevronDown,
  FiMoon,
  FiUser
} from "react-icons/fi";

export default function Notifications() {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Competition Results Published",
      description: "Results for AI Innovation Challenge 2025 are now available!",
      date: "14 octobre 2025 à 01:00",
      isNew: true,
      unread: true,
      icon: "award",
    },
    {
      id: "2",
      title: "New Announcement",
      description: "Submission deadline extended by 2 days",
      date: "13 octobre 2025 à 01:00",
      isNew: true,
      unread: true,
      icon: "announcement",
    },
    {
      id: "3",
      title: "Team Invitation",
      description: "You have been invited to join Code Wizards",
      date: "10 octobre 2025 à 01:00",
      isNew: false,
      unread: false,
      icon: "user-add",
    },
  ]);

  const unreadCount = useMemo(() => items.filter(i => i.unread).length, [items]);

  const markAllRead = () => {
    setItems(prev => prev.map(i => ({ ...i, unread: false, isNew: false })));
  };
  const markRead = (id) =>
    setItems(prev => prev.map(i => (i.id === id ? { ...i, unread: false, isNew: false } : i)));

  return (
    <div className="min-h-screen px-3 md:px-0 py-6 bg-base-50 flex flex-col items-center">
      {/* NAVBAR */}
      <nav className="w-full flex justify-center mb-8">
        <div className="max-w-5xl w-full flex items-center justify-between py-4 px-6 bg-transparent">
          {/* LOGO */}
          <div className="flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-md">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            <span className="font-semibold text-gray-700">Competition Site</span>
          </div>
          {/* MENU CENTRAL */}
          <div className="flex items-center bg-white rounded-full py-2 px-4 shadow-lg gap-6">
            <div className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-full shadow">
              <FiHome size={18} />
              <span className="font-medium">Home</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-blue-500 cursor-pointer">
              <FiAward size={18} />
              <span>Competitions</span>
            </div>
            <div className="relative flex items-center gap-2 text-gray-600 hover:text-blue-500 cursor-pointer">
              <FiBell size={18} />
              <span>Notifications</span>
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-blue-500 cursor-pointer">
              <FiUsers size={18} />
              <span>Teams</span>
              <FiChevronDown size={16} />
            </div>
          </div>
          {/* MODE NUIT + PROFIL */}
          <div className="flex items-center gap-3">
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <FiMoon size={18} className="text-gray-600" />
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <FiUser size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Header + actions */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-xl2 bg-white/85 shadow-insetSoft flex items-center justify-center">
              <Icon name="bell" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-brand-800">Notifications</h1>
              <p className="text-sm text-gray-500 mt-1">Restez informé des résultats et annonces</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button className="btn-primary flex items-center gap-2">
              <Icon name="bell" className="h-5 w-5 text-white" />
              <span>{unreadCount} Non lues</span>
            </button>
            <button className="btn flex items-center gap-2" onClick={markAllRead}>
              <Icon name="check" />
              <span>Tout marquer</span>
            </button>
          </div>
        </header>

        {/* Summary cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass rounded-xl2 p-6 relative">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl2 bg-white/85 shadow-insetSoft flex items-center justify-center">
                <Icon name="bag" />
              </div>
              <div>
                <div className="text-brand-800 text-2xl font-semibold">{items.length}</div>
                <div className="text-xs text-gray-500">TOUTES</div>
              </div>
            </div>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-brand-600 shadow-glass"></span>
          </div>
          <div className="glass rounded-xl2 p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl2 bg-white/85 shadow-insetSoft flex items-center justify-center">
                <Icon name="bell" />
              </div>
              <div>
                <div className="text-brand-800 text-2xl font-semibold">{unreadCount}</div>
                <div className="text-xs text-gray-500">NON LUES</div>
              </div>
            </div>
          </div>
        </section>

        {/* List */}
        <main className="mt-4 pb-10">
          {items.map(item => (
            <NotificationCard key={item.id} item={item} onMarkRead={markRead} />
          ))}
          {/* Dernière carte "fade" statique */}
          <div className="glass rounded-xl2 p-6 mt-5">
            <div className="flex items-start">
              <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl2 bg-white/85 shadow-insetSoft">
                <Icon name="user-add" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-700">Team Invitation</h3>
                <p className="mt-2 text-sm text-gray-600">You have been invited to join Code Wizards</p>
                <p className="mt-3 text-xs text-gray-500">10 octobre 2025 à 01:00</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
// src/pages/Member.jsx
import React, { useState } from 'react';
import {
  UserIcon,
  CreditCardIcon,
  HistoryIcon,
  KeyIcon,
  ShieldIcon,
  LogOutIcon,
  BellIcon,
  SettingsIcon,
  WalletIcon,
  ChevronRightIcon,
  CopyIcon,
  QrCodeIcon,
  StarIcon,
  HelpCircleIcon,
  FileTextIcon
} from 'lucide-react';

const Member = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // User data
  const userData = {
    userId: 'UC7775421',
    name: 'Abdul Rahman',
    balance: '৳12,450',
    vipLevel: 'Gold',
    vipPoints: 2450,
    mobile: '+88017XX-XXXXXX',
    email: 'user@example.com',
    joinedDate: '2024-01-15'
  };

  // Menu items
  const menuItems = [
    { id: 'personal', icon: UserIcon, label: 'Personal Info', color: 'text-blue-400' },
    { id: 'deposit', icon: CreditCardIcon, label: 'Deposit Record', color: 'text-green-400' },
    { id: 'withdraw', icon: WalletIcon, label: 'Withdrawal Record', color: 'text-yellow-400' },
    { id: 'bets', icon: HistoryIcon, label: 'Betting Records', color: 'text-purple-400' },
    { id: 'password', icon: KeyIcon, label: 'Change Password', color: 'text-red-400' },
    { id: 'pin', icon: ShieldIcon, label: 'Transaction PIN', color: 'text-indigo-400' },
    { id: 'support', icon: HelpCircleIcon, label: 'Customer Support', color: 'text-pink-400' },
    { id: 'terms', icon: FileTextIcon, label: 'Terms & Conditions', color: 'text-gray-400' },
  ];

  // Recent transactions
  const recentTransactions = [
    { id: 1, type: 'deposit', amount: '৳5,000', method: 'bKash', status: 'completed', date: '2024-01-20 14:30' },
    { id: 2, type: 'bet', amount: '৳500', game: 'Fortune Tiger', status: 'completed', date: '2024-01-20 15:45' },
    { id: 3, type: 'win', amount: '৳2,500', game: 'Fortune Tiger', status: 'completed', date: '2024-01-20 15:46' },
    { id: 4, type: 'withdraw', amount: '৳2,000', method: 'Nagad', status: 'pending', date: '2024-01-20 16:00' },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* User Info Card */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffcc00] to-yellow-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">AR</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">{userData.name}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <div className="bg-gray-700 px-2 py-1 rounded text-xs">
                  ID: {userData.userId}
                </div>
                <div className="flex items-center bg-gradient-to-r from-yellow-600 to-yellow-800 px-2 py-1 rounded text-xs">
                  <StarIcon className="w-3 h-3 mr-1" />
                  {userData.vipLevel}
                </div>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <SettingsIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Balance Card */}
        <div className="mt-6 bg-gradient-to-r from-[#002b20] to-gray-900 rounded-xl p-4 border border-[#ffcc00]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Wallet Balance</p>
              <p className="text-3xl font-bold text-[#ffcc00]">{userData.balance}</p>
              <p className="text-xs text-gray-400 mt-1">≈ $115.20 USD</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">VIP Points</p>
              <p className="text-xl font-bold">{userData.vipPoints}</p>
              <p className="text-xs text-gray-400">Next level: 3000 pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3">
        <button className="bg-gradient-to-b from-green-600 to-green-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition">
          <CreditCardIcon className="w-6 h-6" />
          <span className="text-sm font-medium">জমা</span>
        </button>
        <button className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition">
          <WalletIcon className="w-6 h-6" />
          <span className="text-sm font-medium">উত্তোলন</span>
        </button>
        <button className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition">
          <QrCodeIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Apps</span>
        </button>
        <button className="bg-gradient-to-b from-red-600 to-red-800 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition">
          <HelpCircleIcon className="w-6 h-6" />
          <span className="text-sm font-medium">Support</span>
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-800/30 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Recent Transactions</h3>
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-sm">
            <option>Today</option>
            <option>Yesterday</option>
            <option>7 Days</option>
            <option>30 Days</option>
          </select>
        </div>
        <div className="space-y-3">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === 'deposit' ? 'bg-green-900/30 text-green-400' :
                  tx.type === 'withdraw' ? 'bg-yellow-900/30 text-yellow-400' :
                  tx.type === 'win' ? 'bg-blue-900/30 text-blue-400' :
                  'bg-purple-900/30 text-purple-400'
                }`}>
                  {tx.type === 'deposit' && <CreditCardIcon className="w-5 h-5" />}
                  {tx.type === 'withdraw' && <WalletIcon className="w-5 h-5" />}
                  {tx.type === 'win' && <HistoryIcon className="w-5 h-5" />}
                  {tx.type === 'bet' && <Dice5 className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-medium capitalize">{tx.type}</p>
                  <p className="text-xs text-gray-400">
                    {tx.method || tx.game} • {tx.date.split(' ')[1]}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${
                  tx.type === 'deposit' || tx.type === 'win' ? 'text-green-400' : 'text-white'
                }`}>
                  {tx.type === 'deposit' || tx.type === 'win' ? '+' : '-'}{tx.amount}
                </p>
                <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                  tx.status === 'completed' ? 'bg-green-900/30 text-green-400' :
                  tx.status === 'pending' ? 'bg-yellow-900/30 text-yellow-400' :
                  'bg-gray-700 text-gray-300'
                }`}>
                  {tx.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Progress */}
      <div className="bg-gradient-to-r from-[#002b20] to-gray-900 rounded-xl p-4 border border-[#ffcc00]/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold">VIP Progress</h3>
          <div className="flex items-center text-[#ffcc00]">
            <StarIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{userData.vipLevel}</span>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-[#ffcc00] to-yellow-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>{userData.vipPoints} points</span>
          <span>550 to Diamond</span>
        </div>
      </div>
    </div>
  );

  const renderMenu = () => (
    <div className="space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className="w-full flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800 transition"
        >
          <div className="flex items-center space-x-3">
            <div className={`${item.color}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span>{item.label}</span>
          </div>
          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#002b20] text-white">
      {/* Header */}
      <header className="bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => setActiveSection('dashboard')} className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ffcc00] to-yellow-600 flex items-center justify-center">
                <span className="text-black font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Member Panel</h1>
                <p className="text-xs text-gray-400">{userData.userId}</p>
              </div>
            </button>
            <div className="flex items-center space-x-4">
              <button className="relative p-2">
                <BellIcon className="w-6 h-6 text-[#ffcc00]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600/30 transition">
                <LogOutIcon className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeSection === 'dashboard'
                ? 'bg-[#ffcc00] text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('menu')}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeSection === 'menu'
                ? 'bg-[#ffcc00] text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Menu
          </button>
        </div>

        {activeSection === 'dashboard' || activeSection === 'menu' ? (
          activeSection === 'dashboard' ? renderDashboard() : renderMenu()
        ) : (
          <div className="bg-gray-800/30 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              {menuItems.find(item => item.id === activeSection)?.label}
            </h2>
            <p className="text-gray-300">
              This section is under development. Functionality for {
                menuItems.find(item => item.id === activeSection)?.label.toLowerCase()
              } will be implemented soon.
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation (Same as Home) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 py-3">
            <button className="flex flex-col items-center text-gray-400 hover:text-[#ffcc00] transition">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-[#ffcc00] transition">
              <GiftIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Promotion</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-[#ffcc00] transition">
              <UsersIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Invite</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-[#ffcc00] transition">
              <TrophyIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Reward</span>
            </button>
            <button className="flex flex-col items-center text-[#ffcc00]">
              <UserIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Member</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Member;

// src/pages/Home.jsx
import React, { useState } from 'react';
import { 
  HomeIcon, 
  GiftIcon, 
  UsersIcon, 
  TrophyIcon, 
  UserIcon,
  BellIcon,
  MenuIcon,
  ChevronRightIcon,
  SearchIcon,
  TrendingUpIcon,
  ClockIcon,
  StarIcon,
  DownloadIcon,
  HeadphonesIcon
} from 'lucide-react';

const Home = () => {
  const [language, setLanguage] = useState('bn');
  const [activeCategory, setActiveCategory] = useState('all');

  // Game categories
  const categories = [
    { id: 'jili', name: 'JILI', icon: '🎮', color: 'bg-blue-500' },
    { id: 'pgsoft', name: 'PG Soft', icon: '🃏', color: 'bg-purple-500' },
    { id: 'evolution', name: 'Evolution', icon: '♠️', color: 'bg-green-500' },
    { id: 'slots', name: 'Slots', icon: '🎰', color: 'bg-yellow-500' },
    { id: 'live', name: 'Live Casino', icon: '👨‍💼', color: 'bg-red-500' },
    { id: 'sports', name: 'Sports', icon: '⚽', color: 'bg-indigo-500' },
  ];

  // Popular games
  const popularGames = [
    { id: 1, name: 'Fortune Tiger', provider: 'JILI', image: 'https://via.placeholder.com/150x100/1a3a2a/ffcc00?text=Fortune+Tiger', bets: 1250 },
    { id: 2, name: 'Buffalo Win', provider: 'PG Soft', image: 'https://via.placeholder.com/150x100/1a3a2a/ffcc00?text=Buffalo+Win', bets: 980 },
    { id: 3, name: 'Baccarat Live', provider: 'Evolution', image: 'https://via.placeholder.com/150x100/1a3a2a/ffcc00?text=Baccarat+Live', bets: 756 },
    { id: 4, name: 'Lucky Neko', provider: 'JILI', image: 'https://via.placeholder.com/150x100/1a3a2a/ffcc00?text=Lucky+Neko', bets: 642 },
  ];

  // Recent results
  const recentResults = [
    { game: 'Fortune Tiger', result: 'Tiger-Tiger-Dragon', amount: '৳500', win: '৳2,500', time: '2 min ago' },
    { game: 'Baccarat', result: 'Player Win', amount: '৳1,000', win: '৳2,000', time: '5 min ago' },
    { game: 'Roulette', result: 'Red 17', amount: '৳750', win: '৳2,250', time: '10 min ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#002b20] text-white">
      {/* Header */}
      <header className="bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ffcc00] to-yellow-600 flex items-center justify-center">
                <span className="text-black font-bold text-xl">UC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ffcc00] to-yellow-400 bg-clip-text text-transparent">
                  UC777
                </h1>
                <p className="text-xs text-gray-400">Premium Betting</p>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2">
                <BellIcon className="w-6 h-6 text-[#ffcc00]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="bg-[#002b20] px-4 py-2 rounded-lg flex items-center space-x-2">
                <UserIcon className="w-5 h-5" />
                <span>লগিন</span>
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-4 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search games..."
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]/50 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24">
        {/* Welcome Banner */}
        <div className="mt-4 mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#002b20] to-gray-900 border border-[#ffcc00]/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">স্বাগতম, Welcome!</h2>
              <p className="text-gray-300">Get 100% Welcome Bonus up to ৳10,000</p>
            </div>
            <button className="bg-gradient-to-r from-[#ffcc00] to-yellow-600 text-black px-6 py-2 rounded-xl font-bold hover:opacity-90 transition">
              জমা করুন
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-800/50 rounded-xl p-3 text-center">
            <p className="text-sm text-gray-400">Online Players</p>
            <p className="text-xl font-bold text-[#ffcc00]">1,254</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-3 text-center">
            <p className="text-sm text-gray-400">Today's Payout</p>
            <p className="text-xl font-bold text-green-400">৳1.2M</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-3 text-center">
            <p className="text-sm text-gray-400">Games</p>
            <p className="text-xl font-bold text-blue-400">250+</p>
          </div>
        </div>

        {/* Game Categories */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Game Categories</h3>
            <button className="text-[#ffcc00] text-sm flex items-center">
              See All <ChevronRightIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`bg-gray-800/50 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-gray-800 transition ${activeCategory === cat.id ? 'ring-2 ring-[#ffcc00]' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Popular Games */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Popular Games</h3>
            <button className="text-[#ffcc00] text-sm flex items-center">
              See All <ChevronRightIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {popularGames.map((game) => (
              <div key={game.id} className="bg-gray-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="relative">
                  <img src={game.image} alt={game.name} className="w-full h-32 object-cover" />
                  <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                    {game.provider}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold">{game.name}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{game.bets} bets</span>
                    <button className="bg-[#ffcc00] text-black text-xs px-3 py-1 rounded-lg font-bold">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Results */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Live Results</h3>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4 text-[#ffcc00]" />
              <span className="text-sm text-gray-400">Updated just now</span>
            </div>
          </div>
          <div className="bg-gray-800/30 rounded-xl overflow-hidden">
            <div className="grid grid-cols-5 bg-gray-900/50 p-3 text-sm font-medium">
              <div>Game</div>
              <div>Result</div>
              <div>Investment</div>
              <div>Win/Loss</div>
              <div>Time</div>
            </div>
            {recentResults.map((result, index) => (
              <div key={index} className="grid grid-cols-5 p-3 border-b border-gray-700/50 text-sm">
                <div className="font-medium">{result.game}</div>
                <div className="text-[#ffcc00] font-bold">{result.result}</div>
                <div>{result.amount}</div>
                <div className="text-green-400 font-bold">{result.win}</div>
                <div className="text-gray-400">{result.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotions */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4">Promotions</h3>
          <div className="bg-gradient-to-r from-[#002b20] to-gray-900 rounded-xl p-4 border border-[#ffcc00]/20">
            <div className="flex items-center space-x-3">
              <GiftIcon className="w-8 h-8 text-[#ffcc00]" />
              <div>
                <h4 className="font-bold">Daily Cashback 10%</h4>
                <p className="text-sm text-gray-300">Get daily cashback on your losses</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-gray-800/50 py-2 rounded-lg hover:bg-gray-800 transition">
              Claim Now
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 py-3">
            <button className="flex flex-col items-center text-[#ffcc00]">
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
            <button className="flex flex-col items-center text-gray-400 hover:text-[#ffcc00] transition">
              <UserIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Member</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;

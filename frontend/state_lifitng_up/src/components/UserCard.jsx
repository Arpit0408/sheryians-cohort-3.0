import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-inner">
        {user?.name ? user.name.charAt(0).toUpperCase() : '?'}
      </div>
      <h3 className="text-xl font-semibold text-white capitalize">{user?.name || 'Unknown User'}</h3>
      <p className="text-gray-400 mt-1">{user?.email || 'No email provided'}</p>
    </div>
  );
};

export default UserCard;

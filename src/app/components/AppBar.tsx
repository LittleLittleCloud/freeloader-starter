import React from 'react';
import Login from './Login';

interface AppBarProps {
  title: string;
}

const AppBar: React.FC<AppBarProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md">
      <div className="text-xl font-bold">{title}</div>
      <div className="flex-grow border-t border-gray-300 mx-4"></div>
      <div className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        <Login />
      </div>
    </div>
  );
};

export default AppBar;
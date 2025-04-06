
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-8 px-4 sm:px-6 border-b border-pink-100/50">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-gray-800 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Inner Child Check-In
        </h1>
        <p className="mt-2 text-muted-foreground text-sm max-w-sm">
          A research-based tool for developing healthier self-dialogue and emotional awareness
        </p>
      </div>
    </header>
  );
};

export default Header;

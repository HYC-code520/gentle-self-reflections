
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-purple-400 text-transparent bg-clip-text">
          Inner Child Check-In
        </h1>
        <p className="mt-3 text-muted-foreground max-w-md">
          A gentle space to reflect on your self-talk and nurture your inner child
        </p>
      </div>
    </header>
  );
};

export default Header;

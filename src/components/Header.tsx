import React from "react";

import { useAuth } from "@/hooks/useAuth";

import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="bg-white border-b border-softPink/10 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-softPink" />
          <h1 className="text-pink-900 text-xl font-heading font-semibold">
            Inner Child Check-in
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/favorites" className="text-gray-600 hover:text-pink-500">
            🌟Favorites
          </Link>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

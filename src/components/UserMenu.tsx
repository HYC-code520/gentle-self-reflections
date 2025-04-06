
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut } from "lucide-react";

const UserMenu = () => {
  const { user, signOut } = useAuth();
  
  return (
    <div className="flex items-center gap-2">
      {user ? (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 hidden sm:inline-block">
            {user.email}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={signOut}
            className="flex items-center gap-1 border-softPink text-pink-700 hover:bg-pink-50"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline-block">Sign Out</span>
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.href = '/auth'}
          className="flex items-center gap-1 border-softPink text-pink-700 hover:bg-pink-50"
        >
          <User className="h-4 w-4" />
          <span>Log In</span>
        </Button>
      )}
    </div>
  );
};

export default UserMenu;

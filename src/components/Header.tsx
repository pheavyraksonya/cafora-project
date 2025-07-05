import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingCart,
  Coffee,
  MapPin,
  Clock,
  User,
  ShoppingBag,
  LogOut,
  UserCircle,
} from "lucide-react";

// Add this User interface
interface User {
  id: string;
  name: string;
  email: string;
}

// LoginProfileButton component - add this to your components folder
const LoginProfileButton: React.FC<{
  user?: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onProfile: () => void;
  onOrders: () => void;
}> = ({ user, onLogin, onLogout, onProfile, onOrders }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    setDropdownOpen(false);
  };

  const getInitial = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  if (!user) {
    return (
      <button
        onClick={onLogin}
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm font-medium"
      >
        <User size={16} />
        <span className="hidden sm:inline">Login</span>
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleDropdownToggle}
        className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      >
        {getInitial(user.name)}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-600 truncate">{user.email}</p>
          </div>

          <div className="py-1">
            <button
              onClick={() => handleMenuItemClick(onProfile)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
            >
              <UserCircle size={16} className="mr-3 text-gray-500" />
              Profile
            </button>

            <button
              onClick={() => handleMenuItemClick(onOrders)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
            >
              <ShoppingBag size={16} className="mr-3 text-gray-500" />
              Orders
            </button>
          </div>

          <div className="border-t border-gray-100 py-1">
            <button
              onClick={() => handleMenuItemClick(onLogout)}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
            >
              <LogOut size={16} className="mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Updated Header component with login/profile functionality
interface HeaderProps {
  itemCount: number;
  onCartClick: () => void;
  // Add these new props
  user?: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onProfile: () => void;
  onOrders: () => void;
}

const Header: React.FC<HeaderProps> = ({
  itemCount,
  onCartClick,
  user,
  onLogin,
  onLogout,
  onProfile,
  onOrders,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <Coffee className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Cafora</h1>
              <p className="text-sm text-gray-600">Sips That Hit Different.</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Phnom Penh</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>Open 6AM - 10PM</span>
              </div>
            </div>

            {/* Login/Profile Button and Cart Button Container */}
            <div className="flex items-center space-x-3 ">
              {/* Login/Profile Button */}
              <LoginProfileButton
                user={user}
                onLogin={onLogin}
                onLogout={onLogout}
                onProfile={onProfile}
                onOrders={onOrders}
              />

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

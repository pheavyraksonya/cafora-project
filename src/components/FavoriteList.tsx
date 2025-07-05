import React from "react";
import { X, Heart, Coffee, Plus } from "lucide-react";
import type { Coffee as CoffeeType } from "../types";

interface Props {
  favorites: CoffeeType[];
  onClose: () => void;
  onAddToCart: (coffee: CoffeeType) => void;
  onRemoveFromFavorites: (coffee: CoffeeType) => void;
  isOpen: boolean;
}

const FavoritesList: React.FC<Props> = ({
  favorites,
  onClose,
  onAddToCart,
  onRemoveFromFavorites,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart size={24} className="text-red-500 fill-current" />
              <h2 className="text-2xl font-bold text-gray-900">Favorites</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">No favorites yet</p>
              <p className="text-gray-400 text-sm">
                Add items to your favorites by clicking the heart icon
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((coffee) => (
                <div
                  key={coffee.id}
                  className="bg-gray-50 rounded-xl p-4 transition-all hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={coffee.image}
                        alt={coffee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {coffee.name}
                          </h4>
                          <p className="text-xs text-amber-600 uppercase tracking-wide mb-1">
                            {coffee.category}
                          </p>
                          <p className="text-gray-600 text-sm mb-2">
                            ${coffee.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full">
                              ⭐ {coffee.rating}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveFromFavorites(coffee)}
                          className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-500 hover:text-red-600"
                          title="Remove from favorites"
                        >
                          <Heart size={16} className="fill-current" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                        {coffee.description}
                      </p>
                      <button
                        onClick={() => onAddToCart(coffee)}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md text-sm"
                      >
                        <Plus size={14} className="inline mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {favorites.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <div className="text-center text-gray-500 text-sm">
              {favorites.length} favorite{favorites.length !== 1 ? "s" : ""}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;

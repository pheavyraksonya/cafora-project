import React from "react";
import { Plus, Coffee } from "lucide-react";
import type { Coffee as CoffeeType } from "../types";

interface Props {
  coffee: CoffeeType;
  onAddToCart: (coffee: CoffeeType) => void;
}

const CoffeeItem: React.FC<Props> = ({ coffee, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          ⭐ {coffee.rating}
        </div>
      </div>

      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
            {coffee.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{coffee.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {coffee.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${coffee.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(coffee)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <Plus size={16} className="inline mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItem;

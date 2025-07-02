import React from "react";
import CoffeeItem from "./CoffeeItem";
import type { Coffee } from "../types";

interface Props {
  coffees: Coffee[];
  onAddToCart: (coffee: Coffee) => void;
}

const CoffeeMenu: React.FC<Props> = ({ coffees, onAddToCart }) => {
  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffees.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
              coffee={coffee}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;

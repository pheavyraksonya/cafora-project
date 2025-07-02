import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import CoffeeMenu from "./components/CoffeeMenu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useCart } from "./hooks/useCart";
import { coffeeMenu, categories } from "./data/coffeeData";
import { handleOrderSubmission } from "./utils/orderUtils";
import type { CheckoutInfo } from "./types";

const App: React.FC = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { cart, addToCart, updateQuantity, clearCart, total, itemCount } =
    useCart();

  const filteredCoffee =
    selectedCategory === "All"
      ? coffeeMenu
      : coffeeMenu.filter((coffee) => coffee.category === selectedCategory);

  const handleCheckoutSubmit = (info: CheckoutInfo) => {
    handleOrderSubmission(info, total);
    clearCart();
    setShowCheckout(false);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header itemCount={itemCount} onCartClick={() => setCartOpen(true)} />

      <Hero />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <CoffeeMenu coffees={filteredCoffee} onAddToCart={addToCart} />

      <Cart
        cart={cart}
        onCheckout={() => setShowCheckout(true)}
        onUpdateQuantity={updateQuantity}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {showCheckout && (
        <Checkout onSubmit={handleCheckoutSubmit} total={total} />
      )}
    </div>
  );
};

export default App;

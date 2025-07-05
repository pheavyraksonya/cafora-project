import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import CoffeeMenu from "./components/CoffeeMenu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import LoginModal from "./components/LoginModal";
import { useCart } from "./hooks/useCart";
import { coffeeMenu, categories } from "./data/coffeeData";
import { handleOrderSubmission } from "./utils/orderUtils";
import type { CheckoutInfo } from "./types";
import Footer from "./components/Footer";

// Add User interface to your types file, or define it here
interface User {
  id: string;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Add user state
  const [user, setUser] = useState<User | null>(null);

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

  // User authentication handlers
  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleUserLogin = (userData: User) => {
    setUser(userData);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    // Add any additional logout logic here (clear tokens, etc.)
  };

  const handleProfile = () => {
    // Navigate to profile page or show profile modal
    console.log("Navigate to profile");
  };

  const handleOrders = () => {
    // Navigate to orders page or show orders modal
    console.log("Navigate to orders");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header
        itemCount={itemCount}
        onCartClick={() => setCartOpen(true)}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onProfile={handleProfile}
        onOrders={handleOrders}
      />

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
        onClearCart={clearCart} // Add this line
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {showCheckout && (
        <Checkout onSubmit={handleCheckoutSubmit} total={total} />
      )}

      {/* Add LoginModal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleUserLogin}
      />
      <Footer />
    </div>
  );
};

export default App;

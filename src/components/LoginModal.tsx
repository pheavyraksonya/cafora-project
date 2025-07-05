import React, { useState, useEffect } from "react";
import { X, Eye, EyeOff, Coffee } from "lucide-react";

// User interface
interface User {
  id: string;
  name: string;
  email: string;
}

// Login form data interface
interface LoginFormData {
  email: string;
  password: string;
}

// Registration form data interface
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleLoginSubmit = async () => {
    setError("");
    setLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock login validation
      if (
        loginData.email === "demo@cafora.com" &&
        loginData.password === "password"
      ) {
        onLogin({
          id: "1",
          name: "Demo User",
          email: loginData.email,
        });
        onClose();
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async () => {
    setError("");

    // Validation
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock registration success
      onLogin({
        id: "2",
        name: registerData.name,
        email: registerData.email,
      });
      onClose();
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setLoginData({ email: "", password: "" });
    setRegisterData({ name: "", email: "", password: "", confirmPassword: "" });
    setError("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Coffee className="text-white" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Let’s Brew You In!" : "Join Cafora"}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>

        {/* Form */}
        <div className="px-8 pb-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Registration Name Field */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={isLogin ? loginData.email : registerData.email}
              onChange={(e) => {
                if (isLogin) {
                  setLoginData({ ...loginData, email: e.target.value });
                } else {
                  setRegisterData({ ...registerData, email: e.target.value });
                }
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={isLogin ? loginData.password : registerData.password}
                onChange={(e) => {
                  if (isLogin) {
                    setLoginData({ ...loginData, password: e.target.value });
                  } else {
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    });
                  }
                }}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field (Registration only) */}
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={registerData.confirmPassword}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={isLogin ? handleLoginSubmit : handleRegisterSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
          </button>

          {/* Demo Credentials (for login mode) */}
          {isLogin && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 font-medium">
                Demo Credentials:
              </p>
              <p className="text-xs text-amber-700">
                Email: cafora01@gmail.com
              </p>
              <p className="text-xs text-amber-700">Password: Cafora$123#</p>
            </div>
          )}

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={switchMode}
                className="ml-1 text-amber-600 hover:text-amber-700 font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

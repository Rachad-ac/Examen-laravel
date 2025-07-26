import React, { createContext, useState, useContext } from "react";
import { logoutUser } from "../api/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = async () => {
  try {
    await logoutUser();
    setUser(null);
    localStorage.removeItem("user");
    return { success: true };
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    // Déconnexion locale quand même
    setUser(null);
    localStorage.removeItem("user");
    return { success: false, error: error.message };
  }
};

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
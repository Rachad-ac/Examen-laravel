import React, { createContext, useState, useContext, useEffect } from "react";
import UserApi from "../api/UserApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchUser = async () => {
    if (!token) {
      // Pas de token => pas besoin d'appeler l'API
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const { data } = await UserApi.getUser();
      setUser(data);
    } catch (error) {
      // Token expiré ou invalide
      console.warn("Erreur fetchUser :", error);
      setUser(null);
      setToken(null);
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, [token]);


  const login = (userData, accessToken) => {
    setUser(userData);
    setToken(accessToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    console.log("Token reçu :", accessToken);
  };

  const logout = async () => {
    try {
      await UserApi.logout();
    } catch (error) {
      console.warn("Déconnexion côté serveur échouée :", error);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("ACCESS_TOKEN");
      setLoading(false);

    }
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

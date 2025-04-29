import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  // Load email from localStorage when app first loads
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // Update email both in state and localStorage
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
    localStorage.setItem("email", newEmail);
  };

  return (
    <AuthContext.Provider value={{ email, setEmail: updateEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

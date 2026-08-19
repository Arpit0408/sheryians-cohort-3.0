import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const REGISTERED_USERS_KEY = 'skyMart_registered_users';
const ACTIVE_SESSION_KEY = 'skyMart_active_session';

const INITIAL_DEMO_USER = {
  fullName: 'Arpit Sharma',
  email: 'demo@skymart.com',
  password: 'password123',
};

export function AuthProvider({ children }) {
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem(REGISTERED_USERS_KEY);
      if (saved) return JSON.parse(saved);
      // Initialize with demo user
      const initial = [INITIAL_DEMO_USER];
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(initial));
      return initial;
    } catch {
      return [INITIAL_DEMO_USER];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const active = localStorage.getItem(ACTIVE_SESSION_KEY);
      return active ? JSON.parse(active) : null;
    } catch {
      return null;
    }
  });

  // Register Function
  const register = (newUser) => {
    const existing = registeredUsers.find(
      (u) => u.email.toLowerCase() === newUser.email.toLowerCase()
    );

    if (existing) {
      return { success: false, message: 'An account with this email already exists!' };
    }

    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(updatedUsers));

    return { success: true, message: 'Account created successfully! Please sign in.' };
  };

  // Login Function
  const login = (email, password) => {
    const foundUser = registeredUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: 'Invalid email address or password.' };
    }

    // Save active session
    const sessionData = {
      fullName: foundUser.fullName,
      email: foundUser.email,
      loggedInAt: new Date().toISOString(),
    };

    setUser(sessionData);
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(sessionData));

    return { success: true, message: `Welcome back, ${foundUser.fullName}!` };
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem(ACTIVE_SESSION_KEY);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

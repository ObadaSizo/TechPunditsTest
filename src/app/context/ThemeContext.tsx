'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of the context data
type ThemeContextType = {
  theme: string; // Current theme, either 'light' or 'dark'
  toggleTheme: () => void; // Function to toggle the theme
};

// Create a context with an undefined default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to manage and provide theme state
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light'); // State to hold the current theme

  useEffect(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme); // Set the theme state
    document.documentElement.setAttribute('data-theme', storedTheme); // Apply the theme to the document
  }, []);

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the new theme
    setTheme(newTheme); // Update the theme state
    localStorage.setItem('theme', newTheme); // Store the new theme in localStorage
    document.documentElement.setAttribute('data-theme', newTheme); // Apply the new theme to the document
  };

  return (
    // Provide the theme and toggle function to children components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext); // Access the context
  if (context === undefined) {
    // Ensure the hook is used within a ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context; // Return the context value
}
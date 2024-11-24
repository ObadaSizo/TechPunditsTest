'use client';

import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center">
      <button 
        onClick={toggleTheme}
        className={`w-[48px] h-[28px] rounded-full ml-2 duration-300 relative ${theme === 'light' ? 'bg-[#E8E8EA]' : 'bg-[#4B6BFB]'} `}
        aria-label="Toggle theme"
      >
        <div 
          className={`w-[24px] h-[24px] bg-white rounded-full absolute top-[2px] duration-300 shadow-md flex items-center justify-center ${
            theme === 'light' ? 'left-[2px]' : 'left-[22px]'
          }`}
        >
           <div className="absolute inset-y-0 left-0 flex items-center justify-center w-[24px]">
          {theme === 'light' ? (
            <svg className="w-4 h-4 text-[#52535F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-[#52535F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </div>
        </div>
      </button>
    </div>
  );
} 
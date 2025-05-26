import React from 'react';

// app/loading.tsx
// Professional loading component for Next.js

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen p-4 bg-gray-50">
      <svg
        className="animate-spin h-12 w-12 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="status"
        aria-label="Loading"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <p className="mt-4 text-gray-700 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;

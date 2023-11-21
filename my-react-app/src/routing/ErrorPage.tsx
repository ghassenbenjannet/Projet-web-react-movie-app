import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, we encountered an error while processing your request.
      </p>
      <div className="animate-bounce">
      <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    </div>
    <p className="mt-4 text-gray-600">Let's get you back <a href="/" className="text-red-500">home</a>.</p>
  </div>
  );
};

export default ErrorPage;
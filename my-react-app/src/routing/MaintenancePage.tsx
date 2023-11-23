import React, { useEffect } from 'react';

export const MaintenancePage: React.FC = () => {
  useEffect(() => {
    document.title = "Maintenance-Page";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">Oops! Maintenance</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, we can't process your request right now. Please try again later.
      </p>
      <div className="animate-bounce">
        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
    </div>
  );
};

export default MaintenancePage;

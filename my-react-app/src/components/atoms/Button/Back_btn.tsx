import React from "react";
import { useNavigate } from 'react-router-dom';

export const BtnBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);   };
  return (
    <button
      className="self-start transition ease-in-out  flex gap-1 items-center hover:-translate-x-2"
      onClick={handleGoBack}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back
    </button>
  );
};

export default BtnBack;
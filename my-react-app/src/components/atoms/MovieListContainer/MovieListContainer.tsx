import React ,{ PropsWithChildren } from "react";

export const MovieListContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
      <div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4'>
          {children}
        </div>
      </div>
    );
  };
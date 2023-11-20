import React from 'react';
import { SearchBar } from '../../atoms/SearchBar/SearchBar';

interface NavBarProps {
  onChangeSearch: (query: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onChangeSearch }) => {
  return (
    <div className='flex flex-wrap gap-2 sm:justify-between'>
      <p className='text-2xl sm:text-4xl'>🎬🍿 Movie library</p>
      <SearchBar onSearch={onChangeSearch} />
    </div>
  );
};
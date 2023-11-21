import React from 'react';
import { SearchBar } from '../../atoms/SearchBar/SearchBar';
import { Link } from 'react-router-dom';

interface NavBarProps {
  onChangeSearch: (query: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onChangeSearch }) => {
  return (
    <div className='flex flex-wrap gap-2 sm:justify-between'>
      <p className='text-2xl sm:text-4xl'>🎬🍿 Movie library</p>
      <SearchBar onSearch={onChangeSearch} />
      <Link to="/favorites" className="self-start transition ease-in-out flex gap-1 items-center hover:-translate-x-2">
        Favoris
      </Link>
    </div>
  );
};
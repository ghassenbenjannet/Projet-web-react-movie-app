import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchValue(query);
    onSearch(query);
  };

  return (
    <input
      type='text'
      placeholder='🔎 Search for movie'
      className='pl-4 rounded-full min-w-full sm:min-w-[20rem] dark:bg-gray-700'
      value={searchValue}
      onChange={handleChange}
    />
  );
};
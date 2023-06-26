    import React, { useState } from 'react';
    import styles from '@/styles/searchbar.module.css';
    import Image from 'next/image';
    import { useContext } from 'react';
    import { Pokecontext } from '@/context/Pokecontext';

    const SearchBar = () => {
    const { setSearch,setPagination } = useContext(Pokecontext);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setSearch(inputValue);
        setInputValue('');
        setPagination(false)
    };

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.SearchBar}>
            <input
                className={styles.SearchBarInput}
                type="text"
                placeholder="un pokémon?"
                value={inputValue}
                onChange={handleChange}
            />
            <button type="submit" className={styles.SearchButton}>
                <Image src="/assets/icon-search.svg" alt="search-icon" width={24} height={24} />
            </button>
        </form>
    );
    };

export default SearchBar;


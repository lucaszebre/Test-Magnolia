import React from 'react'
import styles from '@/styles/searchbar.module.css'
import Image from 'next/image'
const SearchBar = () => {
    return (
        <form className={styles.SearchBar}>
            <input className={styles.SearchBarInput} type="text" placeholder='un pokémon?'/>
            <button className={styles.SearchButton}>
                <Image src='/assets/icon-search.svg' alt='search-icon' width={24} height={24} />
            </button>
        </form>
    )
}

export default SearchBar

import React, { useContext } from 'react';
import { Pokecontext } from '@/context/Pokecontext';
import styles from '@/styles/pagination.module.css';

const Pagination = () => {
    const { currentPage, setCurrentpage } = useContext(Pokecontext);
    const totalPages = 10;

    // Function to handle page change
    const handlePageChange = (page: React.SetStateAction<number>) => {
        setCurrentpage(page);
    };

    // Generate an array of page numbers
    const getPageNumbers = () => {
        const pageNumbers = [];

        // Add ellipsis if there are more than 7 pages
        if (totalPages > 7) {
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
            pageNumbers.push(i);
            }
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        } else if (currentPage > totalPages - 4) {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = totalPages - 4; i <= totalPages; i++) {
            pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i);
            }
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }
        } else {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        }

        return pageNumbers;
    };

    return (
        <ul className={styles.pagination}>
        {getPageNumbers().map((page, index) => (
            <li
            key={index}
            className={`${styles['pageitem']} ${page === currentPage ? styles.active : ''}`}
            >
            <button
                className={styles.pagelink}
                onClick={() => {
                if (typeof page === 'number') {
                    handlePageChange(page);
                }
                }}
            >
                {page}
            </button>
            </li>
        ))}
        </ul>
    );
    };

export default Pagination;


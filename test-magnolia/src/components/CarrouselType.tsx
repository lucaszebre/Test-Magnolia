import React, { useState } from 'react';
import styles from '@/styles/carrouseltype.module.css';
import Image from 'next/image';
import PokemonType from './PokemonType';

    const CarrouselType = () => {
    const ArrayType = [
        'bug',
        'dark',
        'dragon',
        'electric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
    ];

    const [slidePosition, setSlidePosition] = useState(0);

    const slideNavigation = (direction:string) => {
        direction === 'next'
        ? setSlidePosition((prevPosition) =>
            prevPosition <= -87.5 ? -87.5 : prevPosition - 12.5
            )
        : setSlidePosition((prevPosition) =>
            prevPosition === 0 ? 0 : prevPosition + 12.5
            );
    };

    return (
        <div className={styles.Carrousel}>
        <button className={styles.CarrouselButton} disabled={slidePosition === 0}  onClick={() => slideNavigation('prev')}>
            <Image
                src={'/assets/icon-arrow-left.svg'}
                alt='left-arrow'
                width={32}
                height={32}
            
            
            />
        </button>
        <div className={styles.CarrouselWrapper}>
            <div className={styles.AllType} style={{ transform: `translateX(${slidePosition}rem)` }}>
            {ArrayType.map((type) => (
                <PokemonType key={type} type={type} />
            ))}
            </div>
        </div>
        <button  className={styles.CarrouselButton} onClick={() => slideNavigation('next')}
                disabled={slidePosition === -87.5}>
            <Image
                src={'/assets/icon-arrow-right.svg'}
                alt='right-arrow'
                width={32}
                height={32}
                
            />
        </button>
        </div>
    );
    };

export default CarrouselType;


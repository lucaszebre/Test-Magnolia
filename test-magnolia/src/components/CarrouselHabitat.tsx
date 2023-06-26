import React, { useState } from 'react';
import styles from '@/styles/carrouseltype.module.css';
import Image from 'next/image';
import HabitatButton from './HabitatButton';
    const CarrouselHabitat = () => {
    const ArrayHabitat = [
        'cave',
        'forest',
        'grassland',
        'mountain',
        'rare',
        'rough-terrain',
        'sea',
        'urban',
        'waters-edge',
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
            {ArrayHabitat.map((habitat) => (
                <HabitatButton key={habitat} habitat={habitat} />
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

export default CarrouselHabitat;

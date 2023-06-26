import React from 'react'
import styles from '@/styles/top.module.css'
import SearchBar from './SearchBar'
import CarrouselType from './CarrouselType'
import { useContext } from "react";
import { Pokecontext } from '@/context/Pokecontext';
import CarrouselHabitat from './CarrouselHabitat';
const Top = () => {
    const {setType,setCurrentpage,setReset,setHabitat,setPagination} = useContext(Pokecontext)

    return (
        <div className={styles.Top}>
            <div className={styles.TopWrapper}>
                <button onClick={()=>{setType(''),setCurrentpage(1),setReset((prevReset)=>!prevReset),setHabitat(''),setPagination(true)}} className={styles.TopAcceuil}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8.00001L14 2.74001C13.45 2.24805 12.7379 1.97607 12 1.97607C11.2621 1.97607 10.55 2.24805 10 2.74001L4 8.00001C3.68237 8.28408 3.4289 8.63256 3.25648 9.02225C3.08405 9.41194 2.99662 9.83389 3 10.26V19C3 19.7957 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7957 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7957 21 19V10.25C21.002 9.82557 20.9139 9.40555 20.7415 9.01769C20.5691 8.62983 20.3164 8.28296 20 8.00001ZM14 20H10V15C10 14.7348 10.1054 14.4804 10.2929 14.2929C10.4804 14.1054 10.7348 14 11 14H13C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15V20ZM19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H16V15C16 14.2044 15.6839 13.4413 15.1213 12.8787C14.5587 12.3161 13.7957 12 13 12H11C10.2044 12 9.44129 12.3161 8.87868 12.8787C8.31607 13.4413 8 14.2044 8 15V20H6C5.73479 20 5.48043 19.8946 5.2929 19.7071C5.10536 19.5196 5 19.2652 5 19V10.25C5.00018 10.108 5.0306 9.9677 5.08922 9.83839C5.14784 9.70907 5.23333 9.59372 5.34 9.50001L11.34 4.25001C11.5225 4.08969 11.7571 4.00127 12 4.00127C12.2429 4.00127 12.4775 4.08969 12.66 4.25001L18.66 9.50001C18.7667 9.59372 18.8522 9.70907 18.9108 9.83839C18.9694 9.9677 18.9998 10.108 19 10.25V19Z" fill="white"/>
                    </svg>
                    Acceuil
                </button>
                
                <SearchBar />
            </div>
            <div className={styles.TopWrapper2}>
                <div className={styles.TopRow}>
                    <p className={styles.typetext}>
                    rechercher par habitats 
                    </p>
                    <CarrouselHabitat />
                </div>
                <div className={styles.TopRow}>
                    <p className={styles.typetext}>
                        rechercher par type
                    </p>
                    <CarrouselType />
                </div>
                    
                </div>
        </div>
    )
}

export default Top

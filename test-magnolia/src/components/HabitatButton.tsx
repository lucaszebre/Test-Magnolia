import React from 'react';
import styles from '@/styles/pokemontype.module.css';
import { colorType } from '@/utils/colorType';
import { useContext } from "react";
import { Pokecontext } from '@/context/Pokecontext';
const HabitatButton = (props: { habitat: string }) => {
    const typeColor = colorType(props.habitat);
    const {setHabitat,setType,setLoad,setIsLoadingMore,setPagination} = useContext(Pokecontext)

    return (
        <button
        onClick={()=>{
            setType('')
            setHabitat(props.habitat),
            setLoad(1),
            setIsLoadingMore(true),
            setPagination(false)
        }}
        className={styles.Pokemontype}
        style={{ backgroundColor: typeColor }}
        >
        
        {props.habitat}
        </button>
    );
};

export default HabitatButton;
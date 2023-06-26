import React from 'react';
import Image from 'next/image';
import styles from '@/styles/pokemontype.module.css';
import { colorType } from '@/utils/colorType';
import { useContext } from "react";
import { Pokecontext } from '@/context/Pokecontext';
const PokemonType = (props: { type: string }) => {
    const typeColor = colorType(props.type);
    const {setType,setLoad,setIsLoadingMore,setHabitat,setPagination} = useContext(Pokecontext)

    return (
        <button
        onClick={()=>{
            setHabitat('')
            setType(props.type),
            setLoad(1),
            setIsLoadingMore(true),
            setPagination(false)
        }}
        className={styles.Pokemontype}
        style={{ backgroundColor: typeColor }}
        >
            <Image src={`/pokemonTypes/${props.type}.svg`} alt={props.type} width={16} height={16} />
            {props.type}
        </button>
    );
};

export default PokemonType;


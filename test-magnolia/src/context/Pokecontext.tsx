import React, { createContext, useContext, useState } from 'react';
import { Pokemon } from '@/types/Pokemon';

export type Pokecontext = { // Type for context
    details: boolean; // Delete block state
    setDetails: React.Dispatch<React.SetStateAction<boolean>>;
    PokemonData:Pokemon,
    setPokemonData: React.Dispatch<React.SetStateAction<Pokemon>>;
    currentPage:number,
    setCurrentpage: React.Dispatch<React.SetStateAction<number>>
    type:string;
    setType:React.Dispatch<React.SetStateAction<string>>
    load:number;
    setLoad:React.Dispatch<React.SetStateAction<number>>
    isLoadingMore:boolean
    setIsLoadingMore:React.Dispatch<React.SetStateAction<boolean>>

};

export const Pokecontext = createContext<Pokecontext>({ 
details:false,
setDetails:()=>{},
type:'',
setType:()=>{},
PokemonData:{
    number: undefined,
    id: 0,
    name: '',
    types: [{ type: { name: '' } }],
    weight: 0,
    height: 0,
    stats: [{ base_stat: 0,stat: { name: '' } }]
},
setPokemonData:()=>{},
currentPage:1,
setCurrentpage:()=>{},
load:1,
setLoad:()=>{},
isLoadingMore:false,
setIsLoadingMore:()=>{}
});








const Pokedexcontext = (props: { children: React.ReactNode }) => { // Context provider
    const [currentPage,setCurrentpage]= useState(1)
    const [load,setLoad]= useState(1)
    const [details,setDetails]= useState(false)
    const [isLoadingMore,setIsLoadingMore]= useState(false)
    const [PokemonData,setPokemonData]= useState<Pokemon>({
        number: undefined,
        id: 0,
        name: '',
        types: [{ type: { name: '' } }],
        weight: 0,
        height: 0,
        stats: [{ base_stat: 0,stat: { name: '' } }]
    })
    const [type,setType]= useState('')


    return (
        <Pokecontext.Provider
        value={{
            details,
            setDetails,
            PokemonData,
            setPokemonData,
            currentPage,
            setCurrentpage,
            type,
            setType,
            load,
            setLoad,
            isLoadingMore,
            setIsLoadingMore
        }}
        >
        {props.children}
        </Pokecontext.Provider>
    );
    };

export default Pokedexcontext;
import React, { useEffect, useState, useContext } from 'react';
import styles from '@/styles/Allpokemon.module.css';
import PokemonCard from './PokemonCard';
import { fetchPokemonList } from '@/utils/fetchPokemonList';
import { fetchPokemonByType } from '@/utils/fetchPokemonbyType';
import { Pokemon } from '@/types/Pokemon';
import Pagination from './Pagination';
import { Pokecontext } from '@/context/Pokecontext';

const AllPokemon = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const { currentPage, type,setLoad,load,setIsLoadingMore,isLoadingMore } = useContext(Pokecontext);
    const [totalPokemonCount, setTotalPokemonCount] = useState(0);

    function LoadMore(){
        if(
            25*(load+1)>totalPokemonCount
        ){
            setIsLoadingMore(true)
        }else{
            setLoad(prevLoad=>prevLoad+1)
            setIsLoadingMore(false)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
        try {
            let list: Pokemon[] = [];
            let totalCount = 0;
            if (type) {
            list = await fetchPokemonByType(type);
            totalCount = list.length;
            setTotalPokemonCount(totalCount)
            } else {
            list = await fetchPokemonList(currentPage);
            
            }
            setTotalPokemonCount(totalCount);
            setPokemonList(list);
        } catch (error) {
            console.error('Error fetching Pokemon list:', error);
        }
        };

        fetchData();
    }, [currentPage, type]);

    return (
        <div className={styles.AllPokemon}>
        <div className={styles.AllPokemonCenter}>
            { type == '' &&
        pokemonList.map((pokemon) => (
            <PokemonCard
            key={pokemon.number}
            numb={pokemon.id}
            number={pokemon.number}
            name={pokemon.name}
            ListType={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            stats={pokemon.stats}
            />
        )) || pokemonList.slice(0,25*load).map((pokemon) => (
            <PokemonCard
            key={pokemon.number}
            numb={pokemon.id}
            number={pokemon.number}
            name={pokemon.name}
            ListType={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            stats={pokemon.stats}
            />
        )) }
            </div>
            
        {type !== '' && !isLoadingMore &&(
            <div className={styles.AllPokemonRow}>
            <button className={styles.LoadMoreBtn} onClick={() => LoadMore()}
            disabled={isLoadingMore}>
                {isLoadingMore ? 'Loading...' : 'Load More'}
            </button>
            </div>
        )}
        {type == '' && (
            <div className={styles.AllPokemonRow}>
            <Pagination />
            </div>
        )}
        </div>
    );
    };

export default AllPokemon;




import React, { useEffect, useState, useContext } from 'react';
import styles from '@/styles/Allpokemon.module.css';
import PokemonCard from './PokemonCard';
import { fetchPokemonList } from '@/utils/fetchPokemonList';
import { fetchPokemonByType } from '@/utils/fetchPokemonbyType';
import { fetchPokemonByHabitat } from '@/utils/fetchPokemonbyHabitat';
import { fetchPokemon } from '@/utils/fetchPokemon';
import { Pokemon } from '@/types/Pokemon';
import Pagination from './Pagination';
import { Pokecontext } from '@/context/Pokecontext';
import Spinner from 'react-bootstrap/Spinner'; // Import the Spinner component from React Bootstrap

const AllPokemon = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const { currentPage, type,setLoad,load,setIsLoadingMore,isLoadingMore,search,reset,habitat,pagination} = useContext(Pokecontext);
    const [totalPokemonCount, setTotalPokemonCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [found, setFound] = useState(false);

    function LoadMore(){
        if(
            25*(load+1)>totalPokemonCount || 25*(load)>totalPokemonCount
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
            setIsLoading(true);
            let list: Pokemon[] = [];
            let totalCount = 0;
            if (type) {
            list = await fetchPokemonByType(type);
            totalCount = list.length;
            setTotalPokemonCount(totalCount)
            }else if (habitat){
                list = await fetchPokemonByHabitat(habitat);
                totalCount = list.length;
                setTotalPokemonCount(totalCount)
            } else {
            list = await fetchPokemonList(currentPage);
            
            }
            setTotalPokemonCount(totalCount);
            setPokemonList(list);
            setIsLoading(false);
            setFound(true)
        } catch (error) {
            setFound(false)
            setIsLoading(false);
            console.error('Error fetching Pokemon list:', error);
        }
        };

        fetchData();
    }, [currentPage, type,reset,habitat]);


    useEffect(() => {
        setIsLoading(true);
        
        const fetchData = async () => {
            try {
                let pokemonData: Pokemon | undefined;
                let totalCount = 0;
                if (search) {
                const pokemonResponse = await fetchPokemon(search);
                pokemonData = pokemonResponse.data;
                totalCount = 1;
                if(pokemonResponse.response?.ok){
                    setTotalPokemonCount(totalCount);
                    setPokemonList(pokemonData ? [pokemonData] : []);
                    setIsLoading(false);
                    setFound(true)
                }else{
                    setFound(false)
                }
                }
            } catch (error) {
                // setFound(false)
                setIsLoading(false);
                console.error('Error fetching Pokemon:', error);
            }
            
            setIsLoadingMore(false);
            };
        
            fetchData();
        }, [search]);

    return (
        <div className={styles.AllPokemon}>
            {
            found ? (
                <div className={styles.AllPokemonCenter} style={isLoading ? { display: 'flex', justifyContent: 'center', alignItems: 'center' } : undefined}>
                {isLoading ? (
                    <Spinner animation="border" variant="primary" /> // Display the Spinner component while loading
                ) : (
                    type === '' ? (
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
                    ))
                    ) : (
                    pokemonList.slice(0, 25 * load).map((pokemon) => (
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
                    ))
                    )
                )}
                </div>
            ) : (
                <div className={styles.AllPokemonRowNotfound}>
                <button className={styles.LoadMoreBtn}>
                    Le pokémon n'a pas été trouvé
                </button>
                </div>
            )
            }
 
            
        { !pagination && isLoadingMore &&(
            <div className={styles.AllPokemonRow}>
            <button className={styles.LoadMoreBtn} onClick={() => LoadMore()}
            disabled={!isLoadingMore}>
                Load More
            </button>
            </div>
        )}
        {pagination && (
            <div className={styles.AllPokemonRow}>
            <Pagination />
            </div>
        )}
        </div>
    );
    };

export default AllPokemon;




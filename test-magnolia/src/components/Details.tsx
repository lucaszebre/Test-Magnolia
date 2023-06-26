import React from 'react'
import styles from '@/styles/details.module.css'
import PokemonType from './TypeButton'
import Image from 'next/image'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you have included the Bootstrap CSS
import { useContext } from "react";
import { Pokecontext } from '@/context/Pokecontext';
const Details = () => {
    const {details,PokemonData,setDetails} = useContext(Pokecontext)

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${PokemonData.id}.png`;
    
        const formatStatName = (statName: string) => {
            switch (statName) {
            case "hp":
                return "HP";
            case "attack":
                return "Attack";
            case "defense":
                return "Defense";
            case "special-attack":
                return "Sp. Atk";
            case "special-defense":
                return "Sp. Def";
            case "speed":
                return "Speed";
            }
        };
    const formatPokemonId = (id: number) => {
            if (id < 10) return `#00${id}`;
            else if (id >= 10 && id < 99) return `#0${id}`;
            else return `#${id}`;
        };
    return (
        <>
        
        {details && 
        <div className={styles.DetailsWrapper}>
            <div className={styles.Details}>
                <div className={styles.DetailsPokemon1}>
                    <Image className={styles.DetailsPokemonImg} src={imgUrl} alt={PokemonData.name} width={256} height={256} />
                    <div className={styles.DetailsPokemonCardContainer}>
                        <span className={styles.PokemonCardNumber}>
                            {formatPokemonId(PokemonData.id)}
                        </span>
                        <h1 className={styles.PokemonCardH1}>
                            {PokemonData.name}
                        </h1>
                        <div className={styles.PokemonType}>
                        {PokemonData.types.map((type) => (
                <PokemonType key={type.type.name} type={type.type.name} />
                ))}
                        </div>
                        <div className={styles.PokemonRow}>
                            <div className={styles.Weight}>
                                <div className={styles.WeightRow}>
                                    <Image src={'/assets/icon-weight.svg'} alt='weight' width={24} height={24}/>
                                    <span className={styles.PokemonCardW}>{PokemonData.weight} kg</span>
                                </div>
                                <p className={styles.PokemonCardW}>
                                    Poids
                                </p>
                            </div>
                                <div className={styles.Height}>
                                    <div className={styles.HeightRow}>
                                        <Image src={'/assets/icon-ruler.svg'} width={24} height={24} alt='ruler'/>
                                        <span className={styles.PokemonCardW}>{PokemonData.height} m</span>
                                    </div>
                                    <p className={styles.PokemonCardW} >
                                        Hauteur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.PokemonCardCenter}>
                        <Image src={'/assets/divider-pokeball.svg'} alt='pokeball' width={56} height={56} />
                    </div>
                    <div className={styles.DetailsPokemon2}>
                        <div className={styles.DetailsPokemon2Top}>
                            <span className={styles.DetailsStats}>
                                Stats
                            </span>
                            <Image className={styles.DetailsClose} onClick={()=>(setDetails(false))} src='/assets/icon-close.svg' alt='icon-close' width={40.49} height={40.49} />
                        </div>
                        <div className={styles.DetailsData}>
                        {
                            PokemonData.stats.map((data)=>(
                                <div className={styles.DetailsRow}>
                            <span className={styles.DetailsName}>
                                {formatStatName(data.stat.name)}
                            </span>
                            <span className={styles.DetailStat}>
                                {data.base_stat}
                            </span>
                            <div className={`${styles.ProgressBar} custom-progress-bar`}>
                                <ProgressBar variant={data.base_stat > 50 ? 'success' : 'danger'} now={data.base_stat} visuallyHidden />
                            </div>
                        </div>
                            ))
                        }
                        </div>
                
                
                    </div>
            </div>
        </div>}
        </>
    )
}

export default Details

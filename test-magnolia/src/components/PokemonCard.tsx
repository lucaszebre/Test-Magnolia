import React from 'react'
import Image from 'next/image'
import styles from '@/styles/pokemonCard.module.css'
import PokemonType from './TypeButton'
import { Key } from "react";
import { colorType } from '@/utils/colorType';
import { useContext } from "react";
import { Pokecontext } from '@/context/Pokecontext';
import { formatPokemonId } from '@/utils/formatPokemonId';
const PokemonCard = (props:{
    numb:number
    number:Key | null | undefined,
    name:string,
    ListType:[{ type: { name: string } }],
    height:number,
    weight:number,
    stats:[{ base_stat: number; stat: { name: string } }]
}) => {
    
    const typeColor = colorType(props.ListType[0].type.name)
    const {setDetails,details,setPokemonData} = useContext(Pokecontext)
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.numb}.png`;

  
    return (
        <>
        <div className={styles.PokemonCard}  >
            <Image className={styles.PokemonImg} src={imgUrl} alt={props.name} width={256} height={256} />
            <div className={styles.PokemonCardContainer}>
                <span className={styles.PokemonCardNumber}>
                    {formatPokemonId(props.numb)}
                </span>
                <h1 className={styles.PokemonCardH1} style={{ fontSize: props.name.length > 10 ? '38px' : '' }}>
                    {props.name}
                </h1>
                <div className={styles.PokemonType}>
                    {props.ListType.map((type) => (
                    <PokemonType key={type.type.name} type={type.type.name} />
                    ))}
                </div>
                <div className={styles.PokemonRow}>
                    <div className={styles.Weight}>
                        <div className={styles.WeightRow}>
                            <Image src={'/assets/icon-weight.svg'} alt='weight' width={24} height={24}/>
                            <span className={styles.PokemonCardW}>{props.weight} kg</span>
                        </div>
                        <p className={styles.PokemonCardW}>
                            Poids
                        </p>
                    </div>
                    <div className={styles.Height}>
                        <div className={styles.HeightRow}>
                            <Image src={'/assets/icon-ruler.svg'} width={24} height={24} alt='ruler'/>
                            <span className={styles.PokemonCardW}>{props.height} m</span>
                        </div>
                        <p className={styles.PokemonCardW} >
                            Hauteur
                        </p>
                    </div>
                </div>
            </div>
            
            <div className={styles.PokemonCardBottom}
            style={{ backgroundColor: typeColor }}
            onClick={()=>{setPokemonData({
                number:props.number,
                id:props.numb,
                name:props.name,
                types:props.ListType,
                weight:props.weight,
                height:props.height,
                stats:props.stats
            }),setDetails(!details)}}
            >
                <Image  src={'/assets/icon-bolt.svg'} alt='bolt_icon' width={24} height={24}/>
                <span className={styles.PokemonCardW} >Plus de détails</span>
            </div>
        </div>
        </>
        
    )
}

export default PokemonCard

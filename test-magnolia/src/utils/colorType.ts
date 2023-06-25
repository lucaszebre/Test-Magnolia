import { pokemonTypes } from '@/utils/pokemonTypes';

export function colorType(type: string) {
  const foundType = pokemonTypes.find((pokemonType) => pokemonType.name === type);
  return foundType ? foundType.color : '#000000';
}

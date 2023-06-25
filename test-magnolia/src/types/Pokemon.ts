import { Key } from "react";

export type Pokemon = {
    number: Key | null | undefined;
    id: number;
    name: string;
    types: [{ type: { name: string } }];
    weight: number;
    height: number;
    stats: [{ base_stat: number; stat: { name: string } }];
  };
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  Pokedexcontext  from '@/context/Pokecontext'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <Pokedexcontext>
  <Component {...pageProps} />
    </Pokedexcontext>
  )
  
  
  
  
   
}

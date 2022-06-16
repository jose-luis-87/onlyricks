/* eslint-disable curly */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react"
import {getDataApi} from "../api/getApi"
import { Character, RandM } from "../interfaces/api"

export const useApi = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [characters, setCharacters] = useState<Character[]>()
    const [onlyRicks, setOlyRicks] = useState<Character[]>()

    const getOnlyRicks = (_characters:Character[])=>{
        console.log(_characters);
        
        const ricks = _characters.filter(character=>{
            if(character.name.includes('Rick'))return character
        })
        setOlyRicks(ricks)
    }
    
    const getData = async ()=>{
        
        const character = getDataApi.get<RandM>('/character')
        const res = await character
        if(res.data !== undefined){
            setCharacters(res.data.results)
            getOnlyRicks(res.data.results)
            setIsLoading(false)
        }else{
            console.error('Fallo consulta en api')
            setIsLoading(false)
        }
        
        
    }

    useEffect(() => {
        getData()
    }, [])
    

    return {
        isLoading,
        characters,
        onlyRicks
    };
};



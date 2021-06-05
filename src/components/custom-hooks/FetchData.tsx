import React from 'react' 
import { useState, useEffect } from 'react' 
import { server_calls } from '../../api';

export const useGetData = () => {
    const [playerData, setData] = useState<any>([])

    const handleDataFetch = async () => {
        const result = await server_calls.get();
        setData(result)
    }
    //useEffect hook adds data to Styles 

    useEffect( () => {
        handleDataFetch();
    }, [])
    return {playerData, getData:handleDataFetch}
}
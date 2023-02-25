import { useState, useEffect } from "react"

const url = 'https://api.wheretheiss.at/v1/satellites/25544';

const FetchData = async ()=>{
    try{
        const response = await fetch(url)
        if(response.ok){
            const Json = await response.json()
            console.log(Json)
        }
    }catch (error){
        console.log(error)
    }
}
export const Map = ()=>{
    return(
        <div>
        <h1>Map</h1>
        <p>{FetchData()}</p>
        </div>
    )
}
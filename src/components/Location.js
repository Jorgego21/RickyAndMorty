import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    
    const [ isLocation, setIsLocation] =useState({})

    const [ searchId, setsearchId] = useState("")

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
          .then(res => setIsLocation(res.data))
        
    },[])


    const searchType = () => { 

     axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
          .then(res => setIsLocation(res.data))

    }


    console.log(isLocation)
    return (
        <div className='location'>
            <input type="text" onChange={e => setsearchId(e.target.value)} value={searchId}/>
            <button  onClick={searchType}>Search</button>
            <h1>{isLocation.name}</h1>
            <h3><b>Type: </b> {isLocation.type} </h3>
            <h3><b>Dimension: </b> {isLocation.dimension} </h3>
            <h3><b>Population: </b>{isLocation.residents?.length} </h3>


            <ul className='list-rick'>
                {isLocation.residents?.map(location1 => (
                   
                   <ResidentInfo residents={location1}  key={location1}/>
            
                ))}
            </ul>

        </div>
    );
};

export default Location;
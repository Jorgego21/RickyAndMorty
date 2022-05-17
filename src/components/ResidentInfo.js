import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ResidentInfo = ({residents}) => {

    
    const [  character , setCharacter] =useState({})

    

    useEffect(() => {

        axios.get(residents)
        .then(res => setCharacter(res.data))
    },[])

    console.log(character)
    
    const [ status, setStatus] = useState(character.status)
    


    return (
        <div className='genral'>
          <li> 
              <div className='card-ricky'>

                    <div className='info-target'> 
                            <h1>{character.name}</h1>
                            <div className='circle' style={{background: {status} === 'Dead' ? 'red' : 'green'}}>
                          
                            </div>
                            <h3>{character.status}</h3>
                            <h4>Origin</h4>
                            <h3>{character.origin?.name}</h3>
                            <h4>Episodes where appear</h4>
                            <h3>{character.episode?.length}</h3>
                    </div>
                    
                    <img src={character.image} alt="" />
               </div>
          </li>  
        </div>
    );
};

export default ResidentInfo;
import { Logout } from '@mui/icons-material';
import { borderRadius } from '@mui/system';
import { logDOM } from '@testing-library/react';
import React from 'react';
import './Definitions.css';



const Definitions = ({word,meanings,category}) => {
  return (
    <div className='meanings'>
        
        {
            meanings[0]&& word && category==='en' && (
                
                <audio 
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } 
                    style={{backgroundColor:'white' , borderRadius:10}}
                    controls
                >
                    Doesn't support
                </audio>
            )
        }
        
        
        {word===''?(<span className='subTitle'>Please type a Word</span>):
            (meanings.map((mean) => (mean.meanings.map((item)=>(
                item.definitions.map((def)=>(
                    <div className='singleMean' style={{backgroundColor:'white' , color:'black'}}>
                        <b>{def.definition}</b>
                        <hr style={{backgroundColor:'black' , width:'100%'}}></hr>
                        {def.example&&(
                            <span>
                                <b>Example: </b>
                                {def.example}
                            </span>
                        )}
                        {def.synonyms&&(
                            <span>
                                <b>Synonyms: </b>
                                {def.synonyms.map((s)=>`${s} ,`)}
                            </span>
                        )}
                    </div>
                ))
            ))
            ))
            )
        } 
    </div>
  )
}

export default Definitions
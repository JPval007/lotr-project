import React, {useState} from 'react';
import styles from './movies.module.css';

export default function Characters(props) {
  const {data} = props;
  const [char, setChar] = useState('');

  const mappedList = data.docs.filter((element)=>{
     if (char == '')   {
      return true;
     }
     if (element['name'].includes(char)) {
      return true;
     }
     return false;
  });

  return (
    <div className={styles.movieDashboard}>
      <input className={styles.characterSelect} value={char} placeholder='Character name' onChange={(event)=> setChar(event.target.value)}/>
      {mappedList.map((character, index)=>{
        // Get keys here
        const keys = Object.keys(character).filter((element)=>{
          if(element=='name' || element == '_id'){
            return false;
          }
          if (!character[element]){
            return false;
          }
          return true;
        });
        
        return(
          <div key={index} className={styles.information}>
            <h1>{character.name}</h1>
            {keys.map((title)=>{
              return (<div key={title} className={styles.keyVal}>
                <p>{title}: {character[title]}</p>
              </div>)
            })}
          </div>
        );
      })}
    </div>
  )
}

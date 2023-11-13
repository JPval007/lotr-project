import React from 'react'
import styles from './options.module.css';

export default function Options(props) {
    const {selection, setSelection} = props;
    const questions = [
        'character',
        'movie',
        'book'
    ];

    console.log('Selection Value: ' + selection);

  return (
    <div className={styles.buttonContainer}>
        
        {questions.map((element, index)=>{
            return (
                <button onClick={setSelection(element)} className={`${styles.button} ${element === selection ? styles.selectedButton : styles.nonSelectedButton}`} key={index}>{element}</button>
            );
        })}


    </div>
  )
}

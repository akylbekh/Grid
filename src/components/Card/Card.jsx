import React from "react";
import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
      
        <h1 onClick={props.remove}>{props.name}</h1>
        <input type="text" className="change__name" value={props.name} onChange={props.change} />
        <h2>Age: <span>{props.age}</span></h2>
      </div>
      <div className={styles.desc}>
         {props.children}
      </div>
    </div>
  );
}

export default Card;

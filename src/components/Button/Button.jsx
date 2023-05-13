import React from 'react'
import styles from './Button.module.css'

function Button(props) {
  return (
    <button onClick={props.increase} className={styles.btn}>{props.text}</button>
    
  )
}

export default Button
import styles from './task.module.css';
import {CheckCircle, Circle, Trash } from 'phosphor-react';


export function Task() {

    return(
        <div className={styles.task}>
            <button className={styles.checkClick}> <Circle size={20} /> </button>
            <p>lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incididunt ut labore et dolore magna al</p>
            <button className={styles.trash}> <Trash size={20} /> </button>
        </div>
    )
}
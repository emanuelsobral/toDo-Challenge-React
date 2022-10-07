import styles from './task.module.css';
import {CheckCircle, Circle, Trash } from 'phosphor-react';
import { toMake } from '../App';

interface props{
    task: toMake;
}

export function Task({task}: props) {

    return(
        <div className={styles.task}>
            <button className={styles.checkClick}> <Circle size={20} /> </button>
            <p>{task.content}</p>
            <button className={styles.trash}> <Trash size={20} /> </button>
        </div>
    )
}
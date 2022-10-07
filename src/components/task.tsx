import styles from './task.module.css';
import {CheckCircle, Circle, Trash } from 'phosphor-react';
import { toMake } from '../App';

interface props{
    task: toMake;
    onDelete: (taskId:string) => void;
    onComplete: (taskId:string) => void;
}

export function Task({task, onDelete, onComplete}: props) {

    return(
        <div className={styles.task}>
            <button className={styles.checkClick} onClick={() => onComplete(task.id)}> {task.isDone ? <CheckCircle size={20} className={styles.checkCircle}/> : <Circle size={20} className={styles.circle} />} </button>
            <p className={task.isDone ? styles.textCompleted : ""}>{task.content}</p>
            <button className={styles.trash} onClick={() => onDelete(task.id)}> <Trash size={20} /> </button>
        </div>
    )
}
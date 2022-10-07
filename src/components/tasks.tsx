import { toMake } from '../App';
import { Task } from './task';
import styles from './tasks.module.css';

interface props{
    tasks: toMake[];
}

export function TasksAlerts({tasks}: props){
    const taskQuantity = tasks.length;
    const completedTask = tasks.filter(task => task.isDone).length;


    return(
        <div className={styles.tasks}>  {/*Task alerts group*/}
            <header className={styles.header}>

                <div>
                    <strong>Tarefas Criadas</strong>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <strong className={styles.textPurple}>Tarefas FInalizadas</strong>
                    <span>{completedTask} de {taskQuantity}</span>    
                </div>

            </header>

            <div className={styles.list}> {/*tasks*/}
                {tasks.map((task) =><Task key={task.id} task={task} />)}

            </div>


        </div>
    )
}
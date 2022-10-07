import { Task } from './task';
import styles from './tasks.module.css';

export function TasksAlerts(){
    return(
        <div className={styles.tasks}>  {/*Task alerts group*/}
            <header className={styles.header}>

                <div>
                    <strong>Tarefas Criadas</strong>
                    <span>10</span>
                </div>

                <div>
                    <strong className={styles.textPurple}>Tarefas FInalizadas</strong>
                    <span>06 de 10</span>    
                </div>

            </header>

            <div className={styles.list}> {/*tasks*/}
                <Task />
                <Task />
                <Task />
                <Task />
            </div>


        </div>
    )
}
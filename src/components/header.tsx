import {PlusCircle} from 'phosphor-react';

// Import Style
import styles from './header.module.css';

// Import Image
import todoLogo from "../assets/LOGOTODO.svg";

export function Header() {
    return (
        <header className={styles.header}>   {/*Header and Logo*/}
            <img src={todoLogo} />
            <strong>TO<span>.</span>MAKE</strong>

            <form className={styles.formNewTask}> {/*Form and Input*/}
                <input placeholder="nova tarefa" />
                <button>Criar <PlusCircle size={20} /> </button>
            </form>
        </header>
    )
}
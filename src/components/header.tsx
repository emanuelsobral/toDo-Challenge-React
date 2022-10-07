import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

// Import Style
import styles from './header.module.css';

// Import Image
import todoLogo from "../assets/LOGOTODO.svg";


interface  props{
    onAddTask: (taskContent: string) => void;
}

export function Header({onAddTask}: props) {
    const [content, setContent] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        onAddTask(content);
        setContent('');
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    return (
        <header className={styles.header}>   {/*Header and Logo*/}
            <img src={todoLogo} />
            <strong>TO<span>.</span>MAKE</strong>

            <form className={styles.formNewTask} onSubmit={handleSubmit}> {/*Form and Input*/}
                <input placeholder="nova tarefa" onChange={onChangeContent} value = {content} />
                <button>Criar <PlusCircle size={20} /> </button>
            </form>
        </header>
    )
}
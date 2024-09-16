import styles from '../styles/TA8.module.css'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function TA8() {
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        if (task) {
            setTasks([...tasks, task]);
            e.target.reset();
        }
    }

    const handleDelete = (e) => {
        const index = e.target.closest("li").getAttribute('index')
        setTasks(tasks.filter((task, i) => i != index));
    }

    const handleEdit = (e) => {
        const index = e.target.closest("li").getAttribute('index')
        const task = tasks[index];
        const newTask = prompt("Edit task", task);
        if (newTask) {
            tasks[index] = newTask;
            setTasks([...tasks]);
        }
    }

    return (
        <>
            <div className="container">
                <div className={styles.ta8}>
                    <h1>TA 8</h1>
                    <form className={styles.ta8__form} onSubmit={handleSubmit}>
                        <input type="text" name="task" id="task" />
                        <button type='submit'>Save</button>
                    </form>

                    <ul className={styles.ta8__saved}>
                        {tasks.map((task, index) => (
                            <li key={index} index={index}>{task} <div className={styles.saved__task__buttons}><FontAwesomeIcon icon={faPen} onClick={handleEdit}/> <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/></div></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TA8;
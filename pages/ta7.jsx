import styles from '../styles/TA7.module.css'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TA7() {
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

    return (
        <>
            <div className="container">
                <div className={styles.ta7}>
                    <h1>TA 7</h1>
                    <form className={styles.ta7__form} onSubmit={handleSubmit}>
                        <input type="text" name="task" id="task" />
                        <button type='submit'>Save</button>
                    </form>

                    <ul className={styles.ta7__saved}>
                        {tasks.map((task, index) => (
                            <li key={index} index={index}>{task} <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TA7;
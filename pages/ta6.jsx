import styles from '../styles/TA6.module.css'

import { useState } from 'react';

function TA6() {
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        if (task) {
            setTasks([...tasks, task]);
            e.target.reset();
        }
    }

    return (
        <>
            <div className="container">
                <div className={styles.ta6}>
                    <h1>TA6</h1>
                    <form className={styles.ta6__form} onSubmit={handleSubmit}>
                        <input type="text" name="task" id="task" />
                        <button type='submit'>Save</button>
                    </form>

                    <ul className={styles.ta6__saved}>
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TA6;

import { useState } from 'react';

// styles
import styles from './TaskItem.module.css';

// library import
import {CheckIcon, PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'


const TaskItem = ({task,deleteTask,toggleTask}) => {
    const [isChecked,setIsChecked] = useState(task.checked)

    const handleCheckbox = (e) => {
        setIsChecked(!isChecked)
        toggleTask(task.id)
    }
    return(
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={task.isChecked}
                    onChange={handleCheckbox}
                    name={task.name}
                    id={task.id}
                    />
                <label
                    htmlFor={task.id}
                    className={styles.label}>
                        {task.name}
                        <p className={styles.checkmark}>
                            <CheckIcon strokeWidth={2} width={24} height={24} />
                        </p>
                    </label>
            </div>
            <div className={styles['task-group']}>
                <button 
                    className='btn'
                    aria-label={`Update ${task.name} task`}
                    //onChange={}
                >
                    <PencilSquareIcon width={24} height={24} />
                </button>

                <button 
                    className={`btn ${styles.delete}`}
                    aria-label={`Delete ${task.name} task`}
                    onClick={() => deleteTask(task.id)}
                >
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
           
        </li>

    )
}

export default TaskItem
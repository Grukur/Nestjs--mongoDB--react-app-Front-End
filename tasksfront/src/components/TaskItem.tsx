import { useTasks } from "../context/useTasks";
import { Task } from "../interfaces/task.interfaces";
import { IoCheckboxOutline, IoTrashBinOutline } from 'react-icons/io5'

interface Props {
    task: Task
}

function TaskItem({ task }: Props) {

    const { deleteTask, updateTask } = useTasks();

    return (
        <div key={task._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <div className="flex gap-x-2">
                {task.done ? (
                    <IoCheckboxOutline
                        className="text-green-500"
                        onClick={() => {
                            updateTask(task._id, {
                                done: !task.done,
                            });
                        }}
                    />) : (
                    <IoCheckboxOutline
                        className="text-gray-500"
                        onClick={() => {
                            updateTask(task._id, {
                                done: !task.done,
                            });
                        }}
                    />
                )}

                <IoTrashBinOutline onClick={async () => {
                    if (!window.confirm('Are you sure you want to delete this task?')) return;
                    await deleteTask(task._id)
                }} />
            </div>
        </div>
    )
}

export default TaskItem
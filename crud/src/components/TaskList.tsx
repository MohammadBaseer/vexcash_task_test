import { TEXTS } from '../config/texts.ts';
import type { Task } from '../types/task.ts';
import TaskItem from './TaskItem.tsx';

interface TaskListProps {
  tasks: Task[];
  editingTaskId?: string; // used to highlight the task being edited
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export default function TaskList({ tasks, editingTaskId, onEdit, onDelete }: TaskListProps) {
  const text = TEXTS.list;
  const hasTasks = tasks.length > 0;

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span className="fw-semibold">{text.heading}</span>
        <span className="badge bg-dark rounded-pill">{tasks.length}</span>
      </div>

      {hasTasks ? (
        <ul className="list-group list-group-flush">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isBeingEdited={task.id === editingTaskId}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <div className="card-body text-center text-muted py-5">{text.emptyMessage}</div>
      )}
    </div>
  );
}

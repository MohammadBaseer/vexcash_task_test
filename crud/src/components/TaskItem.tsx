import { findOption, PRIORITY_OPTIONS, STATUS_OPTIONS } from '../config/taskOptions.ts';
import { TEXTS } from '../config/texts.ts';
import { TaskStatus, type Task } from '../types/task.ts';
import { formatDate, isPastDate } from '../utils/dateUtils.ts';
import Badge from './Badge.tsx';

interface TaskItemProps {
  task: Task;
  isBeingEdited: boolean;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export default function TaskItem({ task, isBeingEdited, onEdit, onDelete }: TaskItemProps) {
  const text = TEXTS.list;

  const statusOption = findOption(STATUS_OPTIONS, task.status);
  const priorityOption = findOption(PRIORITY_OPTIONS, task.priority);

  const isDone = task.status === TaskStatus.Done;
  const isOverdue = !isDone && isPastDate(task.dueDate);

  return (
    <li className={`list-group-item py-3 ${isBeingEdited ? 'list-group-item-warning' : ''}`}>
      <div className="d-flex justify-content-between align-items-start gap-3">
        {/* Left side: task details */}
        <div className="flex-grow-1 task-details">
          <h5 className={`mb-1 text-break ${isDone ? 'text-decoration-line-through text-muted' : ''}`}>
            {task.title}
          </h5>

          <div className="d-flex flex-wrap gap-2 mb-2">
            <Badge
              text={statusOption?.label ?? task.status}
              colorClass={statusOption?.badgeClass ?? 'bg-secondary'}
            />
            <Badge
              text={`${priorityOption?.label ?? task.priority} ${text.priorityBadgeSuffix}`}
              colorClass={priorityOption?.badgeClass ?? 'bg-secondary'}
            />
          </div>

          {task.description && (
            <p className="mb-2 text-secondary task-description text-break">{task.description}</p>
          )}

          <small className={isOverdue ? 'text-danger fw-semibold' : 'text-muted'}>
            {text.dueLabel} {task.dueDate ? formatDate(task.dueDate) : text.noDueDate}
            {isOverdue && ` ${text.overdueLabel}`}
          </small>
        </div>

        {/* Right side: action buttons */}
        <div className="d-flex flex-column flex-sm-row gap-2">
          <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(task)}>
            {text.editButton}
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(task)}>
            {text.deleteButton}
          </button>
        </div>
      </div>
    </li>
  );
}

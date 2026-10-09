
import { TaskPriority, TaskStatus, type TaskFormData } from '../types/task.ts';

export interface Option<T> {
  value: T; // the value we save
  label: string; // the text the user sees
  badgeClass: string; // Bootstrap classes for the coloured badge
}

export const STATUS_OPTIONS: Option<TaskStatus>[] = [
  { value: TaskStatus.ToDo, label: 'To Do', badgeClass: 'bg-secondary' },
  { value: TaskStatus.InProgress, label: 'In Progress', badgeClass: 'bg-primary' },
  { value: TaskStatus.Done, label: 'Done', badgeClass: 'bg-success' },
];

export const PRIORITY_OPTIONS: Option<TaskPriority>[] = [
  { value: TaskPriority.Low, label: 'Low', badgeClass: 'bg-info text-dark' },
  { value: TaskPriority.Medium, label: 'Medium', badgeClass: 'bg-warning text-dark' },
  { value: TaskPriority.High, label: 'High', badgeClass: 'bg-danger' },
];

export const DEFAULT_FORM_VALUES: TaskFormData = {
  title: '',
  description: '',
  status: TaskStatus.ToDo,
  priority: TaskPriority.Medium,
  dueDate: '',
};

export function findOption<T>(options: Option<T>[], value: T): Option<T> | undefined {
  return options.find((option) => option.value === value);
}

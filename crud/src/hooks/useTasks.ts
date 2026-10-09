import { APP_CONFIG } from '../config/appConfig.ts';
import type { Task, TaskFormData } from '../types/task.ts';
import { useLocalStorage } from './useLocalStorage.ts';

export function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(APP_CONFIG.storageKey, []);

  function addTask(formData: TaskFormData) {
    const now = new Date().toISOString();
    const newTask: Task = {
      ...formData,
      id: crypto.randomUUID(), // a unique id for each task
      createdAt: now,
      updatedAt: now,
    };
    setTasks((oldTasks) => [newTask, ...oldTasks]);
  }

  function updateTask(id: string, formData: TaskFormData) {
    const now = new Date().toISOString();
    setTasks((oldTasks) =>
      oldTasks.map((task) => (task.id === id ? { ...task, ...formData, updatedAt: now } : task))
    );
  }

  function deleteTask(id: string) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

  return { tasks, addTask, updateTask, deleteTask };
}

import { useState } from 'react';
import ConfirmDeleteModal from './components/ConfirmDeleteModal.tsx';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';
import { TEXTS } from './config/texts.ts';
import { useTasks } from './hooks/useTasks.ts';
import type { Task, TaskFormData } from './types/task.ts';

export default function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  function handleFormSubmit(formData: TaskFormData) {
    if (taskBeingEdited) {
      updateTask(taskBeingEdited.id, formData);
      setTaskBeingEdited(null); // go back to "Add" mode
    } else {
      addTask(formData);
    }
  }

  function handleConfirmDelete() {
    if (!taskToDelete) return;

    deleteTask(taskToDelete.id);

    if (taskBeingEdited?.id === taskToDelete.id) {
      setTaskBeingEdited(null);
    }
    setTaskToDelete(null);
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">{TEXTS.appTitle}</span>
        </div>
      </nav>

      <main className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-4">
 
            <TaskForm
              key={taskBeingEdited?.id}
              taskToEdit={taskBeingEdited}
              onSubmit={handleFormSubmit}
              onCancel={() => setTaskBeingEdited(null)}
            />
          </div>

          <div className="col-lg-8">
            <TaskList
              tasks={tasks}
              editingTaskId={taskBeingEdited?.id}
              onEdit={setTaskBeingEdited}
              onDelete={setTaskToDelete}
            />
          </div>
        </div>
      </main>

      {taskToDelete && (
        <ConfirmDeleteModal
          task={taskToDelete}
          onConfirm={handleConfirmDelete}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
    </>
  );
}

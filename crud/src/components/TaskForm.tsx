import { useState, type ChangeEvent, type FormEvent } from 'react';
import { APP_CONFIG } from '../config/appConfig.ts';
import { DEFAULT_FORM_VALUES, PRIORITY_OPTIONS, STATUS_OPTIONS } from '../config/taskOptions.ts';
import { TEXTS } from '../config/texts.ts';
import type { Task, TaskFormData } from '../types/task.ts';

interface TaskFormProps {
  taskToEdit: Task | null;
  onSubmit: (formData: TaskFormData) => void;
  onCancel: () => void;
}

function getInitialValues(task: Task | null): TaskFormData {
  if (!task) return DEFAULT_FORM_VALUES;
  return {
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate,
  };
}

export default function TaskForm({ taskToEdit, onSubmit, onCancel }: TaskFormProps) {
  const isEditMode = taskToEdit !== null;
  const text = TEXTS.form;

  const [formValues, setFormValues] = useState<TaskFormData>(getInitialValues(taskToEdit));

  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const isTitleEmpty = formValues.title.trim() === '';
  const showTitleError = triedToSubmit && isTitleEmpty;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser from reloading the page
    setTriedToSubmit(true);

    if (isTitleEmpty) return; // don't save without a title

    onSubmit({ ...formValues, title: formValues.title.trim() });

    if (!isEditMode) {
      setFormValues(DEFAULT_FORM_VALUES);
      setTriedToSubmit(false);
    }
  }

  return (
    <div className={`card shadow-sm ${isEditMode ? 'border-warning' : ''}`}>
      <div className="card-header fw-semibold">
        {isEditMode ? text.editHeading : text.addHeading}
      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit} noValidate>
          {/* Title (text, required) */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {text.titleLabel} <span className="text-danger">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={`form-control ${showTitleError ? 'is-invalid' : ''}`}
              value={formValues.title}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{text.titleRequiredError}</div>
          </div>


          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              {text.descriptionLabel} <small className="text-muted">{text.optionalHint}</small>
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows={APP_CONFIG.descriptionRows}
              value={formValues.description}
              onChange={handleChange}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              {text.statusLabel}
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              value={formValues.status}
              onChange={handleChange}
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="mb-3">
            <legend className="form-label fs-6">{text.priorityLabel}</legend>
            {PRIORITY_OPTIONS.map((option) => {
              const inputId = `priority-${option.value}`;
              return (
                <div className="form-check form-check-inline" key={option.value}>
                  <input
                    id={inputId}
                    name="priority"
                    type="radio"
                    className="form-check-input"
                    value={option.value}
                    checked={formValues.priority === option.value}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={inputId}>
                    {option.label}
                  </label>
                </div>
              );
            })}
          </fieldset>


          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">
              {text.dueDateLabel}
            </label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              className="form-control"
              value={formValues.dueDate}
              onChange={handleChange}
            />
          </div>


          <div className="d-flex gap-2">
            <button type="submit" className={`btn ${isEditMode ? 'btn-warning' : 'btn-primary'}`}>
              {isEditMode ? text.updateButton : text.addButton}
            </button>

            {isEditMode && (
              <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
                {text.cancelButton}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

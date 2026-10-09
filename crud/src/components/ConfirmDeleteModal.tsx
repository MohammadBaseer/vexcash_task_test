import { useEffect } from 'react';
import { TEXTS } from '../config/texts.ts';
import type { Task } from '../types/task.ts';

interface ConfirmDeleteModalProps {
  task: Task;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDeleteModal({ task, onConfirm, onCancel }: ConfirmDeleteModalProps) {
  const text = TEXTS.deleteDialog;

  // While the popup is open: listen for the Escape key and stop the page from scrolling.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onCancel();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onCancel]);

  return (

    <div
      className="modal d-block modal-backdrop-custom"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="deleteModalTitle"
      onClick={onCancel}
    >

      <div className="modal-dialog modal-dialog-centered" onClick={(event) => event.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalTitle">
              {text.heading}
            </h5>
            <button type="button" className="btn-close" aria-label={text.closeLabel} onClick={onCancel} />
          </div>

          <div className="modal-body">
            {text.questionStart} <strong className="text-break">&quot;{task.title}&quot;</strong>?{' '}
            {text.warning}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              {text.cancelButton}
            </button>
            <button type="button" className="btn btn-danger" onClick={onConfirm} autoFocus>
              {text.confirmButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

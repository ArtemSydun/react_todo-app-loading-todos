import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';
import { Errors } from '../../types/Errors';

type Props = {
  todos: Todo[],
  setErrorType: (error: Errors) => void,
};

export const TodoList: React.FC<Props> = ({ todos, setErrorType }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => {
        const { title, id, completed } = todo;

        return (
          <div
            data-cy="Todo"
            className={cn('todo', { completed })}
            key={id}
          >
            <label className="todo__status-label">
              <input
                data-cy="TodoStatus"
                type="checkbox"
                className="todo__status"
              />
            </label>

            <span data-cy="TodoTitle" className="todo__title">
              {title}
            </span>

            {/* Remove button appears only on hover */}
            <button
              type="button"
              className="todo__remove"
              data-cy="TodoDelete"
              onClick={() => setErrorType(Errors.Delete)}
            >
              ×
            </button>

            {/* overlay will cover the todo while it is being updated */}
            <div data-cy="TodoLoader" className="modal overlay">
              <div className="modal-background has-background-white-ter" />
              <div className="loader" />
            </div>
          </div>
        );
      })}
    </section>
  );
};
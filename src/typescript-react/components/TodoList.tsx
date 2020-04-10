import React from 'react';
import ITodo from '../interfaces/ITodo';
import { TodoListEmpty } from './TodoListEmpty';

type TodoListProps = {
  todos: Array<ITodo>;
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  const isEmpty: boolean = todos.length === 0;
  if (isEmpty) {
    return <TodoListEmpty />;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo', 'mb-1'];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input onChange={onToggle.bind(null, todo.id)} type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <i onClick={(e) => removeHandler(e, todo.id)} className="material-icons red-text">
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

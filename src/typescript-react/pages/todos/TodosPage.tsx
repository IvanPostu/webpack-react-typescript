import React, { Fragment, useState, useEffect } from 'react';
import TodoForm from '@/typescript-react/components/TodoForm.tsx';
import TodoList from '@/typescript-react/components/TodoList';
import ITodo from '@/typescript-react/interfaces/ITodo';

const TodosPage: React.FunctionComponent = (): React.ReactElement => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>;
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const todo: ITodo = {
      completed: false,
      id: Date.now(),
      title: title,
    };
    setTodos((prev) => [todo, ...prev]);
  };

  const toggleHandler = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const removeHandler = (id: number): void => {
    const shoudRemove: boolean = confirm('Are you sure you want to delete?');
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler} />
    </Fragment>
  );
};

export default TodosPage;

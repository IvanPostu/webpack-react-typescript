import React, { Fragment, useState, useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt-2">
      <input onKeyPress={keyPressHandler} ref={ref} type="text" id="title" placeholder="Enter todo name" />
      <label htmlFor="title" className="active">
        Enter todo name:
      </label>
    </div>
  );
};

export default TodoForm;

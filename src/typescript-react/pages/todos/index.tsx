import React, { Suspense } from 'react';

const TodosPage = React.lazy(() => import('./TodosPage'));

const Todos: React.FunctionComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <TodosPage />
  </Suspense>
);

export default Todos;

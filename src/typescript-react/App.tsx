import React, { useEffect } from 'react';
import Navbar from '@/typescript-react/components/Navbar.tsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todos from '@/typescript-react/pages/todos';
import About from '@/typescript-react/pages/about';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    console.log(1);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Todos} exact />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import Navbar from '@/typescript-react/components/Navbar.tsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todos from '@/typescript-react/pages/todos';
import About from '@/typescript-react/pages/about';
import Posts from '@/typescript-react/pages/post';
import { Provider } from 'react-redux';
import { storeInitializer } from '@/typescript-react/store/config/storeInitializer';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={storeInitializer()}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Todos} exact />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '@/typescript-react/components/Navbar.tsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TodosPage from '@/typescript-react/pages/TodosPage'
import AboutPage from '@/typescript-react/pages/about'


const App: React.FunctionComponent = () => {

  useEffect(()=>{
    console.log(1)
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/' component={TodosPage} exact />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

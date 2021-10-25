import React from 'react';
import Home from './Pages/Home';
import NewBook from './Pages/NewBook';
import Navbar from './Components/Navbar';
import UpdateBook from './Pages/UpdateBook';
import BookDetails from './Pages/BookDetails';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/books/newbook' component={NewBook} />
        <Route exact path='/books/edit/:id' component={UpdateBook} />
        <Route exact path='/books/:id' component={BookDetails} />
      </Switch>
    </div>
  );
}

export default App;

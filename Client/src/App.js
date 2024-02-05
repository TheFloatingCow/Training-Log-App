import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.css'
import Home from './containers/Home/Home';
import Feed from './containers/Feed/Feed';
import Login from './containers/Login/Login';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Modal from './components/Modal/Modal';
import Training from './components/Training/Training';

class App extends Component {

  state = {
    modalOpen: false
  }

  addTrainingHandler = () => {
    this.setState( {modalOpen: true})
  }

  trainingCancelHandler = () => {
    this.setState( {modalOpen: false})
  }

  render () {
    return (
      <div>
        <Toolbar addTraining={this.addTrainingHandler}/>
        <main className={classes.Content}>
          <Modal
            show={this.state.modalOpen}>
            <Training modalClosed={this.trainingCancelHandler} />
          </Modal>
          <Switch>
            <Route path="/feed" component={Feed} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import '../css/App.css'

import Home from './Home'
import Page from './Page'
import About from './About'
import Footer from './Footer'

class App extends Component {
  render() {
    const appClass = classNames('App', {})

    return (
      <main>
        <Route render={({ location }) => (
          <TransitionGroup className={appClass}>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/page" component={Page} />
                <Route exact path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
        <Footer />
      </main>
    )
  }
}

export default connect()(App)

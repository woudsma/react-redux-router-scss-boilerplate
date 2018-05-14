import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import '../css/Controls.css'
import { app } from '../actions'

class Controls extends Component {
  render() {
    const controlsClass = classNames('Controls', {})

    return (
      <div className={controlsClass}>
        <span>Redux app state: {JSON.stringify(this.props.app)}</span>
        <span>Redux router state: {JSON.stringify(this.props.router)}</span>

        <button onClick={() => this.props.dispatch(app.initApp())}>
          Dispatch initApp
        </button>
        <button onClick={() => this.props.dispatch(app.incrementCounter())}>
          Dispatch incrementCounter
        </button>
        <button onClick={() => this.props.dispatch(app.resetApp())}>
          Dispatch resetApp
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Controls)

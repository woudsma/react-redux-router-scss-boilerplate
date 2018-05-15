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
        <p>
          Redux state:
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </p>

        <p>
          <span>Actions:</span>
          {!this.props.app.initialized
            ? (
              <button onClick={() => this.props.dispatch(app.initApp())}>
                Dispatch initApp
              </button>
            ) : (
              <button onClick={() => this.props.dispatch(app.resetApp())}>
                Dispatch resetApp
              </button>
            )
          }
          <button onClick={() => this.props.dispatch(app.incrementCounter())}>
            Dispatch incrementCounter
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Controls)

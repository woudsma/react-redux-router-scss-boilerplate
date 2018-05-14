import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/Home.css'

import Controls from './Controls'

class Home extends Component {
  render() {
    const homeClass = classNames('Home', {})

    return (
      <div className={homeClass}>
        <h2>Home component</h2>
        <span>Go to <Link to="/page">Page</Link></span>
        <Controls />
        <span>App initialized: {JSON.stringify(this.props.initialized)}</span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Home)

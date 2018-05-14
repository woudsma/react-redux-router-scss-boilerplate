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
        <span>Home page component</span><br />
        <Controls /><br />
        <span>App initialized: {JSON.stringify(this.props.initialized)}</span><br />
        <span>Go to <Link to="/page">Page</Link></span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Home)

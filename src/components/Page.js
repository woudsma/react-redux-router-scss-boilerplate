import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/Page.css'

import Controls from './Controls'

class Page extends Component {
  render() {
    const pageClass = classNames('Page', {})

    return (
      <div className={pageClass}>
        <span>Page component</span><br />
        <Controls /><br />
        <span>Go to <Link to="/">Home</Link></span>
      </div>
    )
  }
}

export default Page

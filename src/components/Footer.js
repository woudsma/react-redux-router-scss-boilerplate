import React, { Component } from 'react'
import classNames from 'classnames'
import '../css/Footer.css'

class Footer extends Component {
  render() {
    const footerClass = classNames('Footer', {})

    return (
      <div className={footerClass}>
        Footer
      </div>
    )
  }
}

export default Footer

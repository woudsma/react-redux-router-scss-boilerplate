import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import '../css/Footer.css'

class Footer extends Component {
  render() {
    const footerClass = classNames('Footer', {
      visible: this.props.initialized,
    })

    return (
      <div className={footerClass}>
        Footer
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)

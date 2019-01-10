import React from 'react'
import PropTypes from 'prop-types'
import './SeasonDisplay.css'

const Loader = ({ text }) => {
  return (
    <div className="ui segment season-display">
      <div className="ui active dimmer">
        <div className="ui text loader">{text}</div>
      </div>
      <p></p>
    </div>
  )
}
Loader.propTypes = {
  text: PropTypes.string.isRequired
}
Loader.defaultProps = {
  text: 'Loading... default'
}
export default Loader
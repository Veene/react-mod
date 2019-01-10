import './SeasonDisplay.css'
import React from 'react'
import PropTypes from 'prop-types'


const findSeason = (latitude) => {
  const month = new Date().getMonth()
  if(month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter'
  } else {
    return latitude > 0 ? 'winter' : 'summer'
  }
}
const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    icon: 'sun'
  },
  winter: {
    text: 'Burr, it is cold!',
    iconName: 'snowflake'
  }
}

const SeasonDisplay = ({ latitude }) => {
  const season = findSeason(latitude)
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
}
SeasonDisplay.propTypes = {
  latitude: PropTypes.number.isRequired
}
SeasonDisplay.defaultProps = {
  latitude: 1
}

export default SeasonDisplay
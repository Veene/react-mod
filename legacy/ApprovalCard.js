import React from 'react'
import PropTypes from 'prop-types'

const ApprovalCard = (props) => {
  return (
    <div>
      <div>ApprovalCard Start</div>
      {props.children}
      <div>ApprovalCard End</div>
    </div>
    
  )
}

ApprovalCard.propTypes = {
  children: PropTypes.node.isRequired
}

export default ApprovalCard
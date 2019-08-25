import React from 'react'
import PropTypes from 'prop-types'

import IconBot from '../../assets/icon-bot.svg'
import IconUser from '../../assets/icon-user.svg'

const Avatar = ({ owner }) => (
  <>{owner === 'bot' ? <IconBot /> : <IconUser />}</>
)

Avatar.propTypes = {
  owner: PropTypes.string.isRequired,
}

export default Avatar

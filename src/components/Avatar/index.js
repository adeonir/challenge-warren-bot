import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

import IconBot from '../../assets/icon-bot.svg'
import IconUser from '../../assets/icon-user.svg'

const Avatar = ({ owner }) => (
  <>
    {owner === 'bot' && (
      <S.Avatar bot>
        <IconBot />
      </S.Avatar>
    )}

    {owner === 'user' && (
      <S.Avatar>
        <IconUser />
      </S.Avatar>
    )}
  </>
)

Avatar.propTypes = {
  owner: PropTypes.string.isRequired,
}

export default Avatar

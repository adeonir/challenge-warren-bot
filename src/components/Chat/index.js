import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Chat = ({ children }) => {
  return (
    <S.Chat>
      <S.Container>{children}</S.Container>
    </S.Chat>
  )
}

Chat.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Chat

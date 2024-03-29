import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../Avatar'

import * as S from './styled'

const Messages = ({ messages }) => {
  return (
    <S.Messages bot={messages.owner === 'bot'}>
      <Avatar owner={messages.owner} />
      <S.MessageWrapper>
        {messages.text.map((text, index) => (
          <S.Text
            key={`text-${index}`.toString()}
            bot={messages.owner === 'bot'}>
            {text.replace(/\^\d+/gm, '').replace(/<erase>/gm, '')}
          </S.Text>
        ))}
      </S.MessageWrapper>
    </S.Messages>
  )
}

Messages.propTypes = {
  messages: PropTypes.shape({
    owner: PropTypes.string,
    text: PropTypes.array,
  }).isRequired,
}
export default Messages

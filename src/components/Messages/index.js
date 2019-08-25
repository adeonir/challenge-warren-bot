import React from 'react'

import Avatar from '../Avatar'

import * as S from './styled'

const Messages = ({ messages }) => {
  return (
    <S.Messages>
      <Avatar owner={messages.owner} />
      <S.MessageWrapper>
        {messages.text.map((text, index) => (
          <S.Text key={`text-${index}`.toString()} owner={messages.owner}>
            {text.replace(/\^\d+/gm, '')}
          </S.Text>
        ))}
      </S.MessageWrapper>
    </S.Messages>
  )
}

export default Messages

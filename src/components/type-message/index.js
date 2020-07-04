// @flow

import React from 'react'
import './index.scss'
import Icon from '../icon'

type State = {}

class TypeMessage extends React.Component<any, State> {
  state: State = {}

  render() {
    return (
      <div className="type-message">
        <div className="actions">
          <Icon
            name='play_fill'
            size={20}
            className="icon" />
          <Icon
            name='photo'
            size={20}
            className="icon"
          />
           <Icon
            name='upload'
            size={20}
            className="icon"
          />
          <Icon
            name='vote'
            size={20}
            className="icon"
          />
          <Icon
            name='location'
            size={20}
            className="icon"
          />
          <Icon
            name='link'
            size={20}
            className="icon"
          />
          <Icon
            name='user'
            size={20}
            className="icon"
          />
         
        </div>
        <div className="input-text">
          <input type="text" placeholder="Type your message here…" />
          <Icon name="send" className="icon" size={20} />
        </div>
      </div>
    )
  }
}

export default TypeMessage;
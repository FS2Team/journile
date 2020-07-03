/* @flow */

import React from 'react'
import './pings-content.scss'
import AvtImg from '../../resources/image/avatar.png'
import Icon from '../../components/icon'
import Avatar from '../../components/avatar'
import PingMessages from './ping-messages'

type State = {}

class PingsContent extends React.Component<any, State>{
  state: State = {}

  render() {
    return (
      <div className="pings-content">
        <div className="barContent">
          <div className="user-info">
            <div className="user-ctn">
              <div className="avt">
                {/* <img src={AvtImg} alt="" /> */}
                <Avatar url={AvtImg} size={200} />
              </div>
              <div className="user-detail">
                <h3>John Doe <span>@therealjohndoe</span></h3>
                <p>Manhattan, U.S.A</p>
              </div>
            </div>
          </div>
          <div className="actions-call">
            <Icon name="box-add" className="icon" size={24} />
          </div>
          <div className="right-options">
            <p>Reading </p>
          </div>
        </div>

        <PingMessages />
      </div>
    )
  }
}

export default PingsContent;
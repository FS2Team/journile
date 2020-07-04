/* @flow */

import React from 'react'
import './ping-messages.scss'
import _ from 'lodash';
import Avatar from '../../components/avatar';
import AvtImg from '../../resources/image/avatar.png'


type State = {

};

class PingMessages extends React.Component<any, State> {
  state = {

  }

  render() {
    const {

    } = this.state;

    return (
      <div className="ping-messages">
        <div className="msg-content">
          <div className="line-msg msg">
            <Avatar src={AvtImg} />
            <div className="info">
              <p className='text'>Lorem ipsum dolor sit amet Consectetur…</p>
              <p className="dtime">10:15</p>
            </div>
          </div>
          <div className="line-msg reply">
            <div className="info">
              <p className="text">Lorem ipsum dolor sit amet Consectetur…</p>
              <p className="dtime">14:21</p>
            </div>
          </div>
          <div className="line-msg msg">
            <Avatar src={AvtImg} />
            <div className="info">
              <p className='text'>Lorem ipsum dolor sit amet Consectetur…</p>
              <p className="dtime">15:21</p>
            </div>
          </div>
          <div className="line-msg reply">
            <div className="info">
              <p className="text">Lorem ipsum </p>
              <p className="dtime">18:24</p>
            </div>
          </div>
          <div className="line-msg reply">
            <div className="info">
              <p className="text">Lorem ipsum </p>
              <p className="dtime">18:24</p>
            </div>
          </div>
          <div className="line-msg reply">
            <div className="info">
              <p className="text">Lorem ipsum dolor sit amet Consectetur…</p>
              <p className="dtime">19:21</p>
            </div>
          </div>
          <div className="line-msg reply">
            <div className="info">
              <p className="text">Lorem ipsum </p>
              <p className="dtime">20:24</p>
            </div>
          </div>
          <div className="line-msg reply">
            <div className="info">
              <p className="text">Lorem ipsum dolor sit amet Consectetur…</p>
              <p className="dtime">20:35</p>
            </div>
          </div>
          <div className="line-msg msg">
            <Avatar src={AvtImg} />
            <div className="info">
              <p className='text'>Lorem ipsum dolor sit amet Consectetur…</p>
              <p className="dtime">20:56</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PingMessages;
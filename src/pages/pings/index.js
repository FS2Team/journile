/* @flow */

import React from 'react'
import './index.scss'
import PingsBar from './pings-bar';
import PingsContent from './pings-content'

type State = {
  title: string,
};

class PingsPage extends React.Component<any, State> {
  state: State = {
    title: ""
  }

  render() {
    return (
      <div className="pings-page">
        <div className="layout-main">
          <PingsBar />
          <PingsContent />
        </div>
      </div>
    )
  }
}

export default PingsPage;
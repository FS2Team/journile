/* @flow */

import React from 'react'
import './ping-messages.scss'
import _ from 'lodash';
import Composer from '../../components/composer';


const SortMethod = {
  Latest: 0,
  Category: 1,
}

type State = {
  isLoggedin: boolean,
  blockedUsers: Array<any>,
  mutedUsers: Array<any>,
  posts: Array<any>,
  hasMorePosts: boolean,
  loadPosts: boolean,
  sortMethod: number,
};

class PingMessages extends React.Component<any, State> {
  state = {
    isLoggedin: false,
    blockedUsers: [],
    mutedUsers: [],
    posts: [],
    hasMorePosts: true,
    loadPosts: true,
    sortMethod: SortMethod.Latest,
  }

  render() {
    const {
      isLoggedin,
      blockedUsers,
      mutedUsers,
      posts,
      hasMorePosts,
      loadPosts,
      sortMethod,
    } = this.state;

    return (
      <div className="ping-messages">
        <div className="msg-content">
          PingMessages
        </div>
        <Composer onIssue={post => this.setState({ posts: _.concat([post], posts) })} />
      </div>
    )
  }
}

export default PingMessages;
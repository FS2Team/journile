/* @flow */

import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from "../../components/searchbar";
import Icon from "../../components/icon";
import user from "../../resources/image/pings/profile.svg";
import user1 from "../../resources/image/pings/profile1.svg";
import user2 from "../../resources/image/pings/profile2.svg";
import user3 from "../../resources/image/pings/profile3.svg";
import user4 from "../../resources/image/pings/profile4.svg";
import Verified from "../../resources/image/pings/Verified.svg";
import Verified1 from "../../resources/image/pings/Verified1.svg";
import activePing from "../../resources/image/pings/active-ping.svg";
import partner from "../../resources/image/pings/partner.svg";
import { changeTheme, } from '../../redux/actions';
type State = {
  theme: string,
};

class PingsBar extends React.Component<any, State> {
  state: State = {
    theme: "dark",
  };

  static getDerivedStateFromProps(props: any, state: State) {
    let newState: any = {
      theme: props.theme,
    };

    return newState;
  }

  switchTheme = () => {
    const theme = this.state.theme === "dark" ? "light" : "dark";
    this.props.changeTheme(theme);
  };

  render() {
    const { theme } = this.state;
    return (
      <div className="pings-bar">
        <div className="search list-units">
          <Searchbar placeholder="Search Pings…" className="unit" />
          <div className="unit">
            <Icon className="icon" name="calendar_event" size={24} />
            <h5 className="title">Sort by Most Recent</h5>
          </div>
        </div>

        <div className="ping-item">
          <div className="ping-info">
            <div className="avatar">
              <img src={user} alt="user" />
              <img
                className="verified"
                src={theme === 'dark' ? Verified1 : Verified}
                alt="verified"
              />
            </div>
            <div className="message">
              <p>
                <b className="username">John Doe</b>{" "}
                <span className="active">Active</span>
              </p>
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
          <div className="unread-message">
            <img src={activePing} alt="active-ping" />
            <span>1 Unread Ping</span>
          </div>
        </div>

        <div className="ping-item">
          <div className="ping-info">
            <div className="avatar">
              <img src={user1} alt="user" />
              <img
                className="verified"
                src={theme === 'dark' ? Verified1 : Verified}
                alt="verified"
              />
            </div>
            <div className="message">
              <p>
                <b className="username">Janice Doe</b>{" "}
                <span className="active">Active</span>
              </p>
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
          <div className="unread-message">
            <img src={activePing} alt="active-ping" />
            <span>3 Unread Ping</span>
          </div>
        </div>

        <div className="ping-item">
          <div className="ping-info">
            <div className="avatar">
              <img src={user2} alt="user" />
              <img
                className="verified"
                src={theme === 'dark' ? Verified1 : Verified}
                alt="verified"
              />
            </div>
            <div className="message">
              <p>
                <b className="username">Jane Dosh</b>{" "}
                <span className="inactive">Last seen 2m ago</span>
              </p>
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
          <div className="unread-message">
            <img src={activePing} alt="active-ping" />
            <span>1 Unread Ping</span>
          </div>
        </div>

        <div className="ping-item">
          <div className="ping-info">
            <div className="avatar">
              <img src={user3} alt="user" />
              <img
                className="verified"
                src={theme === 'dark' ? Verified1 : Verified}
                alt="verified"
              />
            </div>
            <div className="message">
              <p>
                <b className="username">Forbes</b>{" "}
                <span className="inactive">Last seen 2m ago</span>
              </p>
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
        </div>

        <div className="ping-item">
          <div className="ping-info">
            <div className="avatar">
              <img src={user4} alt="user" />
              <img
                className="verified"
                src={theme === 'dark' ? Verified1 : Verified}
                alt="verified"
              />
            </div>
            <div className="message">
              <p>
                <b className="username">Josh Dosh</b>{" "}
                <span className="inactive">Last seen 4h ago</span>
              </p>
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
          <div className="unread-message">
            <img src={activePing} alt="active-ping" />
            <span>3 Unread Ping</span>
          </div>
        </div>

        <div className="ping-item group active">
          <div className="ping-active"></div>
          <div className="ping-info">
            <div className="avatar">
              <img className="group-icon" src={partner} alt="group" />
            </div>
            <div className="message">
              <p>
                <b className="username">Group Chat</b>
                <span className="inactive">19 Members</span>
              </p>
              <p>Lorem ipsum dolor sit amet Consectetur…</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme.type,
  }
}

export default connect(mapStateToProps, { changeTheme })(withRouter(PingsBar));
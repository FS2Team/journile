/* @flow */

import _ from 'lodash';
import jwtDecode from 'jwt-decode';
import { REHYDRATE } from 'redux-persist';

import {
  AUTH_LOGIN,
  AUTH_SET_USER_DATA,
  AUTH_SET_USER_SETTING,
  AUTH_SET_BLOCKED_USERS,
  AUTH_BLOCK_USER,
  AUTH_UNBLOCK_USER,
  AUTH_SET_MUTED_USERS,
  AUTH_LOGOUT,
  AUTH_TOGGLE_MODAL,
  AUTH_MODAL_TYPE,
} from '../type';
import config from '../../config';


const INITIAL = {
  loggedin: false,
  token: null,
  me: null,
  settings: null,
  blockedUsers: [],
  mutedUsers: [],
  isModalOpen: false,
  modalType: 0,
}

export default (state: any = INITIAL, action: any) => {
  switch (action.type) {
    case REHYDRATE: {
      if (!action.payload) return state;
      
      const { auth } = action.payload;
      let { token, me, settings, loggedin } = auth;
      if (loggedin && token) {
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) {
          token = null;
          me = null;
          settings = null;
          loggedin = false;
        }
      }
      return {
        ...auth,
        token,
        me,
        settings,
        loggedin,
        isModalOpen: false,
        modalType: 0,
      };
    }
    
    case AUTH_LOGIN: {
      const { loginData } = action.data;
      window[config.key_token] = loginData.token;
      localStorage.setItem(config.key_token, loginData.token);

      return { ...state, token: loginData.token };
    }

    case AUTH_SET_USER_DATA: {
      const { userData } = action.data;

      return { ...state, me: userData, loggedin: true };
    }

    case AUTH_SET_USER_SETTING: {
      const { userSetting } = action.data;

      return { ...state, settings: userSetting };
    }

    case AUTH_SET_BLOCKED_USERS: {
      const { blockedUsers } = action.data;

      return { ...state, blockedUsers, };
    }

    case AUTH_BLOCK_USER: {
      const { user } = action.data;

      return { ...state, blockedUsers: _.concat(state.blockedUsers, user), };
    }

    case AUTH_UNBLOCK_USER: {
      const { user } = action.data;

      return { ...state, blockedUsers: _.remove(state.blockedUsers, { id: user.id }), };
    }

    case AUTH_SET_MUTED_USERS: {
      const { mutedUsers } = action.data;

      return { ...state, mutedUsers, };
    }
    
    case AUTH_LOGOUT: {
      window[config.key_token] = null;
      localStorage.removeItem(config.key_token);
      setTimeout(() => {window.location.reload()}, 100);

      return { ...state, token: null, me: null, loggedin: false };
    }
    
    case AUTH_TOGGLE_MODAL: {
      const { isOpen, type } = action.data;

      return { ...state, isModalOpen: isOpen, modalType: type };
    }

    case AUTH_MODAL_TYPE: {
      const { type } = action.data;

      return { ...state, modalType: type };
    }

    default:
      return state;
  }
}
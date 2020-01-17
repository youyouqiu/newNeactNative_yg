import { Reducer } from 'redux';
import {UserInfo} from '@/services/type'
// import { Subscription, Effect } from 'dva';

export interface UserModelState {
  userInfo?: UserInfo
  status: 200 | 401 | 404  // 401: 登录之后token认证失效  200 正常登录用户  404 还未登录
  refresh_token?: string
  access_token?: string
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
  };
  reducers: {
    saveUerInfo: Reducer<UserModelState>;
  };
  subscriptions: {};
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    userInfo: undefined,
    status: 404,
  },
  effects: {

  },
  reducers: {
    saveUerInfo(state, { payload }): UserModelState {
      return {
        ...state,
        userInfo: payload
      };
    },
  },
  subscriptions: {

  }
}

export default UserModel;

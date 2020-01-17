import { Reducer } from 'redux';
import url from '@/constants/requestUrl'

export interface RequestUrl {
  label?: string
  auth: string
  api: string
  pointUrl: string
  upload: string
  review: string
  bdtUrl: string
  jjrApi: string
  authority: string // 原重庆认证中心，现权限中心
}

export interface GlobalModelState {
  requestUrl: RequestUrl
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
  };
  reducers: {
    saveRequestUrl: Reducer<GlobalModelState>;
  };
  subscriptions: {};
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    requestUrl: url.production,
  },
  effects: {

  },
  reducers: {
    saveRequestUrl(state, { payload }): GlobalModelState {
      return {
        ...state,
        requestUrl: payload,
      };
    },
  },
  subscriptions: {

  }
}

export default GlobalModel;

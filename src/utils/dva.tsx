import React from 'react';
// @ts-ignore
import { create } from 'dva-core';
// @ts-ignore
import createLoading from 'dva-loading'
import { Provider, connect } from 'react-redux';
import {Model} from 'dva'

export { connect };

export interface Options {
  models: Model[];
  initialState: any;
  onError: (e: any) => void;
}

export default (options: Options) => {
  const { models } = options

  const app = create(options)

  if (!global.dvaRegistered) models.forEach(model => app.model(model))
  global.dvaRegistered = true

  app.start()
  app.use(createLoading())

  const store :any = app._store
  app._start = (container: any) => () => <Provider store={store}>{container}</Provider>
  app.getStore = () => store
  global.store = store

  return app
}
import React, { useState } from 'react'
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import zhCN from "antd/es/locale/zh_CN";
import store from "./store";
import Router from "./router";
import {
  Switch,
  Route
} from "react-router-dom"
import routes from '@/router'
function App() {
  return <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router/>
    </Provider>
  </ConfigProvider>
}

export default App

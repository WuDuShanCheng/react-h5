import React from 'react'
import * as icons from '@ant-design/icons'

const Icon = (props) => {
  const { name } = props;
  const antIcon = icons;
  return React.createElement(antIcon[name]);
};

export  default  Icon

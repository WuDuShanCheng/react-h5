import React from 'react'
import * as icons from '@ant-design/icons'

const Icon = (props) => {
  const { name,onClick } = props;
  const antIcon = icons;
  return React.createElement(antIcon[name],{
    onClick:onClick
  });
};

export  default  Icon

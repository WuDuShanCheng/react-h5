import React from "react";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import { toggleSettingPanel } from "@/store/actions";
import "./index.less";
import Icon from "@/components/Icon"
const Settings = (props) => {
  const { toggleSettingPanel } = props;
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <Icon name="SettingOutlined" onClick={toggleSettingPanel} />
      </Tooltip>
    </div>
  );
};

export default connect(null, { toggleSettingPanel })(Settings);

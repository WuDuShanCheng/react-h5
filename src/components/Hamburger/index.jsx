import React from "react";
import { connect } from "react-redux";
import { toggleSiderBar } from "@/store/actions";
import Icon from "@/components/Icon"
import "./index.less";
const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props;
  return (
    <div className="hamburger-container">
      <Icon
        name={sidebarCollapsed ? "MenuUnfoldOutlined" : "MenuFoldOutlined"}
        onClick={toggleSiderBar}
      />
    </div>
  );
};

export default connect((state) => state.app, { toggleSiderBar })(Hamburger);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUserInfo } from "@/store/actions";
import { Menu, Dropdown, Modal, Layout, Avatar } from "antd";
const { Header } = Layout
import Hamburger from "@/components/Hamburger";
import BreadCrumb from "@/components/BreadCrumb";
import FullScreen from "@/components/FullScreen";
import Settings from "@/components/Settings";
import Icon from "@/components/Icon";
import "./index.less";
const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.user,
    ...state.settings,
  };
};

const LayoutHeader = (props) => {
  const {
    token,
    avatar,
    sidebarCollapsed,
    logout,
    getUserInfo,
    showSettings,
    fixedHeader,
  } = props;
  token && getUserInfo(token);
  const handleLogout = (token) => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        logout(token);
      },
    });
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        handleLogout(token);
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="dashboard">
        <Link to="/dashboard">首页</Link>
      </Menu.Item>
      <Menu.Item key="project">
        <a
          target="_blank"
          href="https://github.com/NLRX-WJC/react-antd-admin-template"
          rel="noopener noreferrer"
        >
          项目地址
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">注销</Menu.Item>
    </Menu>
  );
  const computedStyle = () => {
    let styles;
    if (fixedHeader) {
      if (sidebarCollapsed) {
        styles = {
          width: "calc(100% - 80px)",
        };
      } else {
        styles = {
          width: "calc(100% - 200px)",
        };
      }
    } else {
      styles = {
        width: "100%",
      };
    }
    return styles;
  };
  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
      则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      {/*{fixedHeader ? <Header /> : null}*/}
      <Header
        style={computedStyle()}
        className={fixedHeader ? "fix-header" : ""}
      >
        <Hamburger />
        <BreadCrumb />
        <div className="right-menu">
          <FullScreen />
          {showSettings ? <Settings /> : null}
          <div className="dropdown-wrap">
            <Dropdown overlay={menu}>
              <div>
                <Avatar shape="square" size="medium" src={avatar} />
                <Icon style={{ color: "rgba(0,0,0,.3)" }} name="CaretDownOutlined" />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  );
};


export default connect(mapStateToProps, { logout, getUserInfo })(LayoutHeader);
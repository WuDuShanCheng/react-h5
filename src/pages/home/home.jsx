import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <main className="home-container">
        <p className="common-title">请录入您的信息</p>
        <form className="home-form">
          <div className="home-form-tiem">
            <span>销售金额：</span>
            <input type="text" placeholder="请输入订单金额"/>
          </div>
          <div className="home-form-tiem">
            <span>客户姓名：</span>
            <input type="text" placeholder="请输入客户姓名"/>
          </div>
        </form>
      </main>
    );
  }
}


export default (Home);

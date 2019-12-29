import React from 'react';
import './index.scss';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
// const { Menu.Item } = Menu;
import Author from './component/index.component';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <div id="home">
        <div className="home-top">
          <div className="home-left"><Icon type="github" style={{ fontSize: '14px', color: '#08c', paddingRight: '10px' }} />罗晓旭的微博</div>
          <div className="home-right">
            <Menu
              onClick={this.handleClick}
              className="home-menu"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['/pageList']}
              mode="horizontal"
            >
              <Menu.Item
                key="/pageList"
              >
                <NavLink to="/pageList">
                  <Icon type="bank" />
                  <span>首页</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="/myTemplate"
              >
                <NavLink to="/myTemplate">
                  <Icon type="edit" />
                  <span>归档</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="/pageData"
              >
                <NavLink to="/pageData">
                  <Icon type="folder" />
                  <span>分类</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="/templateList"
              >
                <NavLink to="/templateList">
                  <Icon type="user" />
                  <span>关于</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="home-down">
          <div className="home-left">
            <Author />
          </div>
          <div className="home-right">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
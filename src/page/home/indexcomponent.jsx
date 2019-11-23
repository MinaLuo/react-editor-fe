import React from 'react';
import './index.scss';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
// const { Menu.Item } = Menu;

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
           {/* <image></image> */}
           夸克H5
           </div>
         <div className="home-content">
            <Menu
              onClick={this.handleClick}
              className="home-menu"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['/pageList']}
              mode="inline"
            >
                <Menu.Item
                  key="/pageList"
                >
                  <NavLink to="/pageList">
                    <Icon type="mail" />
                    <span>我的作品</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="/myTemplate"
                >
                   <NavLink to="/myTemplate">
                    <Icon type="appstore" /> 
                    <span>我的模板</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="/pageData"
                >
                   <NavLink to="/pageData">
                    <Icon type="setting" />
                    <span>我的数据</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="/templateList"
                >
                   <NavLink to="/templateList">
                    <Icon type="setting" />
                    <span>创意模板</span>
                  </NavLink>
                </Menu.Item>
              </Menu>
              <div className="home-right">
                {this.props.children}
              </div>
         </div>
      </div>
    );
  }
}

export default Home;
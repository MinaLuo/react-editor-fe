import React from 'react';
import './index.scss';
// import state from './index.state'
import serve from './index.server'
import { Form, Input, Button } from 'antd';
// const  State = new state()
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

 handleSubmit =  (e) => {
    e.preventDefault();
     this.props.form.validateFields((err, values) => {
      if (!err) {
        serve.login(values).then((res) => {
          console.log(res)
        })
      }
    });
  };
  register(){
    serve.register({username: this.state.username,password: this.state.password}).then((res) => {
      console.log(res)
    })
  };
  onInputChange=e=>{
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log('onInputChange', this.state);
  }

  componentDidMount() {
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-page'>
      <Form onSubmit={this.handleSubmit} className="login-form">
              <p className='title'>Quark可视化系统</p>
              <Form.Item label="用户名">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  name="username"
                  placeholder="Username"
                  onChange={e => this.onInputChange(e)}
                />,
              )}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={e => this.onInputChange(e)}
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <Button className='register' type="link" onClick={() => this.register()}>立马注册</Button>
              <p className='Copyright'>Copyright © 2019 <span className='Quark'>Quark-h5版权所有</span></p>
            </Form.Item>
    </Form>
    </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
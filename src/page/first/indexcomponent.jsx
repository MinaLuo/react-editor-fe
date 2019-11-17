import React from 'react';
import './index.scss';

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
 
  render() {
    return (
      <div id="first">
          首页
      </div>
    );
  }
}

export default First;
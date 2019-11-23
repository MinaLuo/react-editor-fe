import React from 'react';
import './index.scss';

class MyTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
 
  render() {
    return (
      <div id="my-template">
          我的模板
      </div>
    );
  }
}

export default MyTemplate;
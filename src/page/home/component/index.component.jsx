import React from 'react';
import './index.scss';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="author">
                <div className="person">
                    <img src={require("../../../assets/images/author.jpg")} alt="" />
                    <div className="name">罗晓旭</div>
                    <div className="title">前端打杂人员，略微代码洁癖</div>
                </div>
                <div className="hot-article"></div>
                <div className="tag"></div>
            </div>
        );
    }
}

export default Author;
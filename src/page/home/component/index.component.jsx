import React from 'react';
import { Icon, Tag } from 'antd';
import './index.scss';
import server from './index.server';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            tag: []
        }
    }

    async componentDidMount() {
        const list = await server.list({
            order: 'viewCount DESC',
            page: 1,
            pageSize: 6
        })
        const tag = await server.tag();
        const colorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'geekblue', 'purple']
        tag.forEach((item) => {
            const colorIdx = Math.random() * 10
            item.color = colorList[parseInt(colorIdx)]
        })

        this.setState({
            list: list.rows,
            tag: tag
        })
    }

    render() {
        return (
            <div id="author">
                <div className="person">
                    <img src={require("../../../assets/images/author.jpg")} alt="" />
                    <div className="name">罗晓旭</div>
                    <div className="title">前端打杂人员，略微代码洁癖</div>
                    <div className='link'>
                        <span className='github'>
                            <Icon type="github" className='icon' />
                            <a src="https://github.com/gershonv" href={"/"} className='a'>github</a>
                        </span>
                        <span className='juejin'>
                            <Icon type="github" className='icon' />
                            <a src="https://github.com/gershonv" href={"/"} className='a'>juejin</a>
                        </span>
                    </div>
                </div>
                <div className="hot-article">
                    <div className='title'>
                        <span className='line-left'></span>
                        <span className='article'>热门文章</span>
                        <span className='line-right'></span>
                    </div>
                    <div className='list'>
                        {this.state.list.map((item) => {
                            return (
                                <div key={item.id} className='list-item'>{item.title}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="tag">
                    <div className='title'>
                        <span className='line-left'></span>
                        <span className='article'>标签</span>
                        <span className='line-right'></span>
                    </div>
                    <div className='list-tag'>
                        {this.state.tag.map((item, index) => {
                            return (
                                <Tag key={index} color={item.color} className='list-item'>{item.name}</Tag>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Author;
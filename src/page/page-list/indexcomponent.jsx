import React from 'react';
import { Icon, Tag } from 'antd';
import './index.scss';
import server from './index.server';
import { translateMarkdown, getRandomColor } from '../../utils'

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: []
    }
  }

  async componentDidMount() {
    const articleList = await server.articleList(
      { pageSize: 10 }
    );

    this.setState({
      articleList: articleList.rows
    })

  }

  render() {
    return (
      <div id="article">
        <div className="article-left">
          {
            this.state.articleList.map((item) => {
              return <div className='article-list' key={item.id}>
                <div className='article-title' >
                  <span className='line-left'></span>
                  <span className='middle'>
                    <span className='title'>{item.title}</span>
                    <span className='time'>{item.createdAt.slice(0, 10)}</span>
                  </span>
                  <span className='line-right'></span>
                </div>
                <div
                  // onClick={() => jumpTo(item.id)}
                  className='article-detail'
                  dangerouslySetInnerHTML={{ __html: translateMarkdown(item.content) }}
                />
                <div className='article-tags'>
                  <span>
                    <Icon type="message" />
                    <span className='num'>{item.comments.length}</span>
                  </span>
                  <span>
                    <Icon type="eye" />
                    <span className='num'>{item.viewCount}</span>
                  </span>
                  <span>
                    <Icon type="tags" />
                    {item.tags && item.tags.map((tag, idx) => {
                      return <Tag color={getRandomColor()} key={idx}> {tag.name}</Tag>;
                    })}
                  </span>
                  <span>
                    <Icon type="folder" />
                    {item.categories && item.categories.map((categorie) => {
                      return <Tag color='rgb(45, 183, 245)' key={categorie.name}> {categorie.name}</Tag>;
                    })}
                  </span>
                </div>
              </div>
            })
          }
        </div>
        <div className='article-right'>
          <div className='article-right-title'>
            <span className='line-left'></span>
            <span className='article-title'>文章列表</span>
            <span className='line-right'></span>
          </div>
          {
            this.state.articleList.map((item) => {
              return <div key={item.id} className='article-title-item'>{item.title}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Article;
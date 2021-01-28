import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Tag } from 'antd';
import { AppstoreOutlined, ClockCircleOutlined, CommentOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../../utils/util';
import { getArticleById } from '../../../services'
export default class ArticleDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ele: {},
            id: this.props.match.params.id
        }
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        console.log(this.props)
        Promise.resolve(getArticleById(id)).then((value) => {
            this.setState({
                ele: value.data
            })
        }).catch((err) => {
            console.log(err);
            throw err;
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.id !== state.id) {
            return {
                id: props.match.params.id
            };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id) {
            // 请求详情数据
            Promise.resolve(getArticleById(this.state.id)).then((value) => {
                this.setState({
                    ele: value.data
                })
            }).catch((err) => {
                console.log(err);
                throw err;
            })

        }
    }


    render() {
        const { ele } = this.state
        return (
            <>
                <div style={{ overflow: 'hidden', margin: '0 2.4rem' }} key={Math.random()}>
                    <Card hoverable={true} style={{ marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,.1)' }}>
                        <div>
                            <h1 className="main-h5"> {ele.title}   </h1>
                            <Row style={{ margin: "20px 0" }} >
                                <Col xl={4} lg={12} md={12} xs={24} className="main-col">
                                    <span><UserOutlined /> 作者</span><span style={{ marginLeft: '4px', color: "green" }}>{ele.author} </span>
                                </Col>
                                <Col xl={7} lg={12} md={12} xs={16} style={{ whiteSpace: 'nowrap' }}>
                                    <span><ClockCircleOutlined style={{ color: 'blue' }} /> 发表于</span>
                                    <span> {formatDateTime(ele.createTime)} </span>
                                </Col>
                                <Col xl={13} lg={24} md={24} xs={24} >
                                    <span><AppstoreOutlined style={{ color: 'green' }} /> 类别</span>
                                    <span style={{ margin: '0 4px' }}> {ele.category} </span>
             |
             <span style={{ marginLeft: '4px' }}><FireOutlined style={{ color: 'red' }} /> </span>
                                    <span>阅读量</span>
                                    <span style={{ margin: '0 4px' }}> {ele.fire} </span>
             |
             <span style={{ marginLeft: '4px' }}><CommentOutlined style={{ color: 'pink' }} /> </span>
                                    <span>评论数</span>
                                    <span style={{ margin: '0 4px' }}> {ele.comment} </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div >
                                        <div dangerouslySetInnerHTML={{ __html: ele.htmlContent }}></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {
                                  <span style={{marginLeft:'auto'}}><Link to={{pathname:'/index/editor/'+ele.articleId}} > 编辑</Link></span>
                                }

                            </Row>
                        </div>
                    </Card>

                </div>


            </>
        )
    }
}

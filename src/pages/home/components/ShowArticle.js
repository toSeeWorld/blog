import React, { useEffect, useState } from 'react';
import { Card, Col, Divider, Row, Tag, Pagination } from 'antd';
import { AppstoreOutlined, ClockCircleOutlined, CommentOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../../utils/util';
import Animation from './Animation';
import util from '../../../utils/util'
export default function ShowArticle(props) {
    const list = props.article?.data || [];
    const [currentPage, setPage] = useState(list.slice(0, 3));
    const handlerChange = (page, size) => {
        setPage(list.slice((page - 1) * size, (page * size)));
    };
    useEffect(() => {
        setPage(list.slice(0, 3))
    }, [list.length])
    return (
        <>
            {
                currentPage.map((ele, index) => {

                    return (
                        <div style={{ overflow: 'hidden' }} key={Math.random()}>
                            <Animation index={index + 1}>
                                <Card hoverable={true} style={{ marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,.1)' }}>
                                    <div>
                                        <h3 className="main-h5"> <Link to={{ pathname: '/index/views/'+ele.articleId }}> {ele.title} </Link>   </h3>
                                        <Row >
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
                                                <div className="ellipsis">
                                                    <div dangerouslySetInnerHTML={{ __html: ele.htmlContent }}></div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {
                                                ele.tags && ele.tags.map((item,index) => {
                                                    return (
                                                        <Link to="/index/tags" key={Math.random()}><Tag color={util.colors[index]}> {item} </Tag></Link>
                                                    )
                                                })
                                            }

                                        </Row>
                                    </div>
                                </Card>
                            </Animation>
                        </div>
                    )
                })
            }
            < Row style={{ display: 'flex', justifyContent: 'flex-end' }}  >
                <Pagination total={list.length} pageSize={3} onChange={handlerChange} />
            </Row >

        </>
    )
}

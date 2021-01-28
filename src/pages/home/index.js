import React from 'react';
import { Card, Col, Divider, Row} from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import ShowArticle from './components/ShowArticle'
import { getUserByName, getArticle } from '../../services'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: null,
            articleList: []
        }
    }
    componentDidMount() {
        Promise.all([getUserByName("admin001"), getArticle()]).then((value) => {
            this.setState({ info: value[0].data, article: value[1] })
        }).catch((err => {
            throw err;
        }));

    }
    render() {
        return (
            <Row className="outer-row" gutter={[0, 12]}>
                <Col className="main" xs={24} xl={16} >
                    <ShowArticle article={this.state.article} />
                </Col> 
                <Col className="aside" xs={0} xl={8}> 
                <div className="shadow">
                    <Card hoverable>
                        <Card.Meta avatar={<UserOutlined />} title={<span style={{ fontWeight: 700 }}>我的名片</span>} style={{ fontWeight: 'bolder' }}>
                        </Card.Meta>
                        <Divider />
                      
                             <UserInfo info={this.state.info} />
                     
                       

                    </Card> 
                      </div>
                    <div style={{padding:'5px',fontSize:18}}>
                        <a href="#/index/write" style={{color:'white'}}>去写博客{">>"}</a>
                    </div>
                </Col>
            </Row>
        )
    }
}
function UserInfo(props) {
    const { job, live, name, qq, email } = props.info || {};
    return (
        <div>
            <p>网名：{name}</p>
            <p>职业：{job} </p>
            <p>现居：{live}</p>
            <p>qq：{qq}</p>
            <p>邮箱：{email}</p>
        </div>
    )
}
export default Home;
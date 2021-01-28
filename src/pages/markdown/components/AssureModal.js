import React, { useEffect, useState } from 'react'
import 'braft-editor/dist/index.css';
import { Modal, Select, Form, Button, Tag, Row, Col } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { getTags } from '../../../services';
const { Option } = Select;
export default function (props) {
    const map = ["react"];
    const [isHover, setHover] = useState(false);
    const [tags, setTags] = useState([])
    const close = (value) => {
        console.log(value);
    }
    useEffect(() => {
        async function fetchData() {
            await getTags().then((value) => {
                setTags(value.data)
            })
        }
        fetchData()

    }, [])
    return (
        <Modal visible={true} onCancel={props.onCancel} onOk={props.onOk} destroyOnClose={true}>
            <Form>
                <Form.Item label={<span style={{userSelect:'none'}}>添加文章标签</span>} >
                    <Row >
                        <Col style={{ display: 'flex', alignItems: 'stretch'}}>
                            {
                                map.map((ele) => (<Tag closable key={ele} onClose={close} style={{ display: 'flex', alignItems: 'center',userSelect:'none' }}>{ele}</Tag>))
                            }
                        </Col>
                        <Col> <Button icon={<PlusOutlined />} ><span>添加文章标签</span></Button></Col>
                        <div className="inner-modal">
                            <div className="inner-modal-tag">
                                <span className="mask-selection">
                                    还可以添加{5 }个标签
                                </span>
                                <span className="mask-close-btn" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                    <button className="close-btn" style={{ color: isHover ? 'rgba(0,0,0,.56)' : ' #ddd' }}  ><CloseOutlined /> </button>
                                </span>
                            </div>
                            <div className="inner-modal-search">
                                <input className="inner-modal-input" placeholder="请输入文字搜索,按enter可自定义标签" />
                            </div>
                            <div className="inner-tag-tab">
                                {
                                    tags?.map((ele) => (
                                        <span className="modal-tag-list" key={ele.tagId}>
                                            {ele.name}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </Row>


                </Form.Item>
            </Form>
        </Modal>
    )
}
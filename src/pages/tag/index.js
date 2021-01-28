import React from 'react';
import { Col, Row } from 'antd';
import { getTags } from '../../services';
class MyTag extends React.PureComponent {

    state = {
        tags: null
    }

    componentDidMount() {
        Promise.resolve(getTags()).then((value) => {
            this.setState({tags:value.data})
        })
    }
    render() {
        return (
            <>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 >目前共{this.state.tags?.length || 0}条标签</h3>
                </Row>
                <Row className="outer-row">
                    <Col className="tag-main" xs={24} xl={10}>
                        <Row className="tag-list">
                            {
                              (this.state.tags ||[]).map((ele) => {
                                    return (
                                        <TagBox color="red" key={Math.random()}>{ele.name}</TagBox>
                                    )
                                })
                            }

                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}
function TagBox(props) {
    return (
        <div style={{ fontSize: 28, background: 'transparent', border: 'none', color: props.color || "white" }} {...props}>

        </div>
    )
}
export default MyTag;
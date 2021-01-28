import React from 'react';
import {Spin} from 'antd';
import {connect} from 'react-redux';
import backgroundImg from './../static/bg.jpg'
const homeImg = {
  backgroundSize: '100% 100%', //记得这里100%
  background: `url(${ backgroundImg })`,
  zIndex:999
}
class MySpin extends React.PureComponent {
    render() {
        const { PageRouter } = this.props;
        return (
            <Spin spinning = {this.props.spinLoading}>
                <PageRouter />
            </Spin>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        spinLoading: state.app.spinLoading
    }
}
export default connect(mapStateToProps)(MySpin)

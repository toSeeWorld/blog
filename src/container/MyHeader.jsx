import React from 'react';
import { Col, Layout, Row } from 'antd';
import { ModuleMenu, VerticalModuleMenu } from '../components/ModuleMenu';
const { Header } = Layout;
class MyHeader extends React.PureComponent {
    render() {
        return (
            <>
                <Header className="linear-to-right " style={{ position: 'fixed', zIndex: 9, width: '100%', height: '60px', padding: 0 }} >
                    <Row className="wrapper">
                        <Col xs={6} md={6} xl={0} className="wrapper-link">
                            <NavIcon />
                            <VerticalModuleMenu />
                        </Col>
                        <Col xs={0} xl={6} style={{ height: '100%' }} >
                            <Info />
                        </Col>
                        <Col xs={0} xl={18} style={{ height: '100%' }} >
                            <ModuleMenu />
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Header>
            </>

        )
    }
}
function Info() {
    return (
        <div style={{ height: '100%' }}>
            <a href="#" style={{ display: 'block', width: '60%', height: '100%' }}>
                <span style={{ color: '#000', fontSize: '18px', fontWeight: 'bolder' }}>Hello,Dingjia</span>
            </a>
        </div>
    )
}
function NavIcon() {
    const hanlerClick = (ev) => {
        const element = ev.target;
        const isRorate = [].includes.call(element.classList, "rorate");
        const navUl = document.querySelector(".verticalMenu-item");
        if (isRorate) {
            element.classList.remove("rorate");
            navUl.style.maxHeight = '0px'
        }
        else {
            ev.target.classList.add("rorate");
            navUl.style.maxHeight = '500px'
        }


    }
    return (
        <div className="navicon" onClick={(ev) => hanlerClick(ev)}>
        </div>
    )
}
export default MyHeader;
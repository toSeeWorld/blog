import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, TagOutlined, CommentOutlined, FileOutlined, AppstoreAddOutlined } from '@ant-design/icons'
class ModuleMenu extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Menu mode={this.props.mode || "horizontal"}
                    style={{ padding: 0, height: '100%', background: 'unset', border: 'unset' }} >
                    <Menu.Item className="menu-item" icon={<HomeOutlined />}>
                        <Link to="/index">首页</Link>
                    </Menu.Item >
                    <Menu.Item className="menu-item" icon={<TagOutlined />}>
                        <Link to="/index/tags">标签</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-item" icon={<AppstoreAddOutlined />}>
                        <Link to="/index/category">分类</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-item" icon={<FileOutlined />}>
                        <Link to="/index/files">归档</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-item" icon={<CommentOutlined />}>
                        <Link to="/index/comment">留言板</Link>
                    </Menu.Item>
                </Menu>
            </>
        )
    }

}
function VerticalModuleMenu() {
    const handlerClick = (ev)=>{
        const currentTarget = ev.currentTarget;
        const navIcon = document.querySelector(".navicon");
        currentTarget.style.maxHeight = '0px';
        navIcon.classList.remove("rorate")
    }
    return (
        <div className="verticalMenu">

            <ul className="verticalMenu-item" onClick={handlerClick}>
                <li> <Link to="/index">首页</Link></li>
                <li><Link to="/index/tags">标签</Link></li>
                <li><Link to="/index/category">分类</Link></li>
                <li><Link to="/index/files">归档</Link></li>
                <li> <Link to="/index/comment">留言板</Link></li>
            </ul>


        </div>
    )
}
export { ModuleMenu, VerticalModuleMenu };
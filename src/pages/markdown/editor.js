import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css';
import { LeftOutlined} from '@ant-design/icons';
import { Form} from 'antd';
import { editArticle } from '../../services';
import { getDateFormate } from '../../utils/util';
import {getArticleById} from '../../services'
import 'animate.css'
export default class EditorDemo extends React.Component {

  state = {
    editorState: null,
    id:this.props.match.params.id,
  }

   componentDidMount() {
    Promise.resolve(getArticleById(this.state.id)).then((value)=>{
        this.setState({
           ele:value.data,
           editorState :BraftEditor.createEditorState(value.data.htmlContent) 
        })
    })
  }

  submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = this.state.editorState.toHTML()
    const result = await editArticle(htmlContent)
    // console.log('save',htmlContent);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }
  onchange = (ev)=>{
    this.setState({
      ele:{...this.state.ele,title:ev.target.value}
    })
  }
  handlerFinish = async (value) => {
    if (!this.state.editorState || !this.state.ele.title) return;
    const htmlContent = this.state.editorState.toHTML()
    const result = await editArticle({...this.state.ele,title:value.title,htmlContent});
    if (result) {
      setTimeout(() => {
        window.location.hash = "#/index";
      }, 1000)

    }
  }

  render() {

    const { ele = {},editorState } = this.state;
    const date = new Date();
    return (
      <>
        <div className="animate__animated animate__backInLeft">
          <Form style={{ background: '#fff', margin: '0 1.4rem', borderRadius: '10px', height: '80%' }}
            onFinish={this.handlerFinish} >
            <Form.Item name="title">
              <div className="title-wrapper">
                <a href="#/index" style={{ color: 'gray' }} className="btn-goback">
                  <LeftOutlined />
                  <span style={{ marginLeft: '4px' }}>返回首页</span>
                </a>
                <div className="input-title">
                  <input className="input-inner" value={ele.title ||''} onChange={this.onchange} maxLength={100} />
                </div>
                <div className="article-bar">
                  <button className="btn-save" type="button">保存草稿</button>
                </div>
                <div className="article-bar">
                  <button className="btn-publish" type="submit" >发布文章</button>
                </div>
              </div>
            </Form.Item>
            <Form.Item name="content" value={editorState}>
              <div className="my-component">
                <BraftEditor
                  value={editorState}
                  onChange={this.handleEditorChange}
                />
              </div>
            </Form.Item>

          </Form>
        </div>
       
      </>

    )

  }

}
import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css';
import { LeftOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { saveArticle } from '../../services';
import { getDateFormate } from '../../utils/util';
import AssureModal from './components/AssureModal'
// import 'animate.css';
export default class EditorDemo extends React.Component {
  state = {   
    editorState: null,
    visible: false
  }
  formRef = React.createRef()
  async componentDidMount() {
    // Assume here to get the editor content in html format from the server
    // const htmlContent = await fetchEditorContent()
    // Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
    // this.setState({
    //   editorState: BraftEditor.createEditorState(htmlContent)
    // })
  }

  submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = this.state.editorState.toHTML()
    const result = await saveArticle(htmlContent)
    // console.log('save',htmlContent);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }
  onCancel = () => {
    this.setState({ visible: false })
  }
  handlerFinish = async (value) => {
    const formValues = this.formRef.current.getFieldsValue()
    if (!this.state.editorState || !formValues.title) return;
    const htmlContent = this.state.editorState.toHTML()
    const result = await saveArticle(formValues.title, htmlContent);
    if (result) {
      setTimeout(() => {
        window.location.hash = "#/index";
      }, 1000)

    }
  }

  render() {

    const { editorState } = this.state
    return (
      <>
        <div className="animate__animated animate__backInLeft">
          <AssureModal visible={this.state.visible} onCancel={this.onCancel} onOk={this.handlerFinish} />
          <Form style={{ background: '#fff', margin: '0 1.4rem', borderRadius: '10px', height: '80%' }}
            onFinish={this.handlerFinish} ref={this.formRef} initialValues={{ title: getDateFormate() }}>
            <Form.Item name="title">
              <div className="title-wrapper">
                <a href="#/index" style={{ color: 'gray' }} className="btn-goback">
                  <LeftOutlined />
                  <span style={{ marginLeft: '4px' }}>返回首页</span>
                </a>
                <div className="input-title">
                  <input className="input-inner" maxLength={100} defaultValue={getDateFormate()} />
                </div>
                <div className="article-bar">
                  <button className="btn-save" type="button">保存草稿</button>
                </div>
                <div className="article-bar">
                  <button className="btn-publish" type="button" onClick={() => this.setState({ visible: true })} >发布文章</button>
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
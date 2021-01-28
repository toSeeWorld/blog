import React from 'react';
import {Layout,Progress} from 'antd';
import MyHeader from '../container/MyHeader';
import AppRouter from '../router/AppRouter';
const {Content} = Layout;
class Index extends React.PureComponent {
    render() {
        return (
          <Layout style={{background:'transparent'}}>
              <MyHeader />
               <Content style={{position:'relative',padding:0,height:'100%',minHeight:'1000px',marginTop:'34px',paddingTop:'60px'}} >
                   <AppRouter />
               </Content>
          </Layout>
        )
    }
}
export default Index;
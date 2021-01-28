import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import { Route, Switch} from 'react-router-dom';
const Home = Loadable({
    loader:()=>import('./../pages/home'),
    loading:Loading
})
const Tags = Loadable({
    loader:()=>import('./../pages/tag'),
    loading:Loading
})
const Mk = Loadable({
    loader:()=>import("./../pages/markdown"),
    loading:Loading
})
const ArticleDetail = Loadable({
    loader:()=>import("./../pages/home/components/ArticleDetail"),
    loading:Loading
})
const Editor = Loadable(
    {
        loader:()=>import("./../pages/markdown/editor"),
        loading:Loading
    }
)
export default ()=>{
    return (
        <Switch>
            <Route path="/index" exact component={Home} />
            <Route path="/index/tags" exact component={Tags} />
            <Route path="/index/write" exact component={Mk} />
            <Route path="/index/views/:id" exact component={ArticleDetail} />
            <Route path="/index/editor/:id" exact component={Editor} />
        </Switch>
    )
}
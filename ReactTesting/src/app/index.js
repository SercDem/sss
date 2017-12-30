var React=require('react');
var ReactDOM=require('react-dom');
var createReactClass=require('create-react-class');
import{Router,Route,browserHistory,Link} from 'react-router';
var second=require('./second');
var third=require('./third');
var fourth=require('./fourth');
var first=require('./index');
var App=createReactClass({
  render:function(){
    return(
      <Router history={browserHistory}>
      <Route path={'/'} component={FirstOne}></Route>
        <Route path={'/second'} component={second}></Route>
        <Route path={'/third'} component={third}></Route>
        <Route path={'/fourth'} component={fourth}></Route>
      </Router>
    );
  }
});

var FirstOne=createReactClass({
  render:function(){
    return(
      <div>
<Link className="rr" to={'/'}>First Page </Link>
<Link className="rr" to={'/second'}> Second Page </Link>
<Link className="rr" to={'/third'}> Third Page </Link>
<Link className="rr" to={'/fourth'}> Fourth Page </Link>
<style>
{"\.rr{padding:5px;Text-decoration:none;\}\
"}
</style>
<h3>First Page</h3>
</div>
    );
}
});

//111111111111111111111111111111111









ReactDOM.render(<App />,document.getElementById('todo-wrapper'));

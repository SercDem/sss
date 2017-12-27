var React=require('react');
var ReactDOM=require('react-dom');
var createReactClass=require('create-react-class');
import{Router,Route,browserHistory,Link} from 'react-router';
var other=require('./other');

var App=createReactClass({
  render:function(){
    return(
      <Router history={browserHistory}>
      <Route path={'/'} component={FirstOne}></Route>
        <Route path={'/other'} component={other}></Route>
      </Router>
    );
  }
});

var FirstOne=createReactClass({
  render:function(){
    return(
      <div>
      <h2>First Page</h2>
      <Link to={'/other'}>Other Page</Link>
      </div>
    );
  }
});


ReactDOM.render(<App />,document.getElementById('todo-wrapper'));

var React=require('react');
var ReactDOM=require('react-dom');
var createReactClass=require('create-react-class');
import{Router,Route,browserHistory,Link} from 'react-router';
var second=require('./second');
var third=require('./third');
var fourth=require('./fourth');
var first=require('./index');
require('./css/index.css');

import { Form, FormControl,Button} from 'react-bootstrap';
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
<Part1 />
<h1> Bootstrap object</h1>
<Button bsStyle="success" bsSize="large">Success</Button>
<Button bsStyle="primary" bsSize="small">Primary</Button>
</div>
    );
}
});

//111111111111111111111111111111111

var Part1=createReactClass({
  getInitialState:function(){
    return{
      vall:['Learn Redux','Learn React','Learn JS','Learn ES6']
    }
  },
  render:function(){
  var vall=this.state.vall;
    vall=vall.map(function(item,index){
      return(
        <Part2 item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));
    return(
      <div className="p2">
      <ul>{vall}</ul>
      </div>

    );

  },
  onDelete:function(item){
    console.log(item);
    var updated=this.state.vall.filter(function(val,index){
      return item!==val;
    });
    this.setState({
      vall:updated
    });
},
onAdd:function(item){
  var updated=this.state.vall;
  updated.push(item);
  this.setState({
    vall:updated
  })
},
te1:function(){
  console.log("HUE");

}

});
//



//
var Part2=createReactClass({
  render:function(){
    return(
      <li>
      <div className="p1">
      <span>{this.props.item} </span>
      <span onClick={this.handleDelete}> x</span>
      </div>
      </li>
    );
  },
  handleDelete:function(){
    this.props.onDelete(this.props.item);
  }
});
var Part3=createReactClass({
  render:function(){
    return(
      <div>
      <form onSubmit={this.subme}>
<input type="text" required ref="newItem"/>
<input type="submit" value="Submit" />
</form>
      </div>

    );
  },
  subme:function(e){
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});






ReactDOM.render(<App />,document.getElementById('todo-wrapper'));

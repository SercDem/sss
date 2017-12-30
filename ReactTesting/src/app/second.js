var React=require('react');
var createReactClass=require('create-react-class');
import{Link}from 'react-router';
var second=createReactClass({
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
  <h3>Second Page</h3>
  </div>
      );
  }

});
module.exports=second;

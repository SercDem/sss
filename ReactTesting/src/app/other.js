var React=require('react');
var createReactClass=require('create-react-class');
import{Link}from 'react-router';
var other=createReactClass({
  render:function(){
    return(
      <div>
<h2>This is the second page</h2>
<Link to={'/'}>First Page</Link>
</div>
    );
}

});
module.exports=other;

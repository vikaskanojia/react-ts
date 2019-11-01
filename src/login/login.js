import React, { Component, createRef} from 'react';
import { connect } from 'react-redux';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password:'',
		}


		this.username = createRef();
		this.password = createRef();
		this.submit = this.submit.bind(this);
	}

	submit = (ev) => {
		ev.preventDefault();
		this.props.history.push('/dashboard')
	}

	render() {
		return (
				<div className="container">
			        <div className="row text-center">
			            <div className="col-md-12">
			            	<div className="row">
				                 <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
				                    <div className="panel panel-default">
				                        <div className="panel-heading">
				                        	<strong>Enter Details To Login </strong>  
				                        </div>
				                        <div className="panel-body">
			                                <form  onSubmit={this.submit}>
			                                    <div className="form-group input-group">
		                                            <span className="input-group-addon"><i className="fa fa-tag"></i></span>
		                                            <input type="text" className="form-control" placeholder="Your Username" ref={this.username} name="username"/>
			                                    </div>
			                                    <div className="form-group input-group">
		                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
		                                            <input type="password" className="form-control"  placeholder="Your Password" ref={this.password}  name="password"/>
			                                    </div>
			                                    <div className="form-group">
		                                            <label className="checkbox-inline">
		                                                <input type="checkbox" /> Remember me
		                                            </label>
		                                            <span className="pull-right">
		                                                   <a href="#" >Forget password ? </a> 
		                                            </span>
		                                        </div>
			                                    <button type="submit" className="btn btn-primary">Login Now</button>
			                                  	
			                                </form>
			                            </div>
				                    </div>
				                </div>
				            </div>
			            </div>

			        </div>
                  	<button  onClick={this.props.addCount} className="btn btn-primary">Add Now</button>
                  	<br/>
                  	<button  onClick={this.props.minusCount} className="btn btn-primary">Minus Now</button>
                  	{this.props.meraCount}


                  	{
                  		this.props.apiData
                  	}
			    </div>

			);
	}
}


function mapStateToProps(state ) {
	console.log(1111111111,state)
	return {
    	meraCount: state.currentCount,
    	apiData : JSON.stringify(state.apiData)
  	}
}

function mapDisptachToProps(dispatch) {
	return {
    	addCount: ()=>{ dispatch({type:'ADDNUM'}) } ,
    	minusCount: ()=>{ dispatch({type:'REDNUM'})},
  	}
}


export default connect(mapStateToProps, mapDisptachToProps)(Login);

import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
				<Fragment>
					<header className="header">
			        <div className="header__preheader">
			           <div className="container clearfix">
			               <div className="header__call"><i className="fa fa-phone" aria-hidden="true"></i> Call +001 555 801</div>
			               <div className="header__toplink">
			                   <ul>
			                        <li><a href="">WELCOME MSG!</a></li>
			                        <li><a href="">MY ACCOUNT</a></li>
			                        <li><a href="">MY WHISTLIST</a></li>
			                        <li><a href="">LOGIN</a></li>
			                    </ul>
			               </div>
			           </div> 
			        </div>
			        <div className="container clearfix">
			            <nav className="header__left-navbar">
			                <ul>
			                    <li><a href="/">Home</a></li>
			                    <li><a href="/">Gallery</a></li>
			                    <li><a href="/">Pages</a></li>
			                </ul>
			            </nav>      
			            <div className="header__logo">
			                <a href="/" aria-label="Shopia">
			                    <img className="header__logo--img" srcset="static/images/logo.png, static/images/logo_2x.png" alt="logo">
			                </a>
			            </div>
			            <div className="header__right-navbar">
			                <ul className="clearfix">
			                    <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
			                    <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
			                    <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
			                    <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
			                </ul>
			                <button className="btn">RUPIAH <i className="fa fa-angle-down" aria-hidden="true"></i></button>
			            </div>
			        </div>
			    </header>
			    <main>
			</Fragment>
			);
	}

}



function mapStateToProps(state ) {
	return {
    	meraCount: state.currentCount
  	}
}

function mapDisptachToProps(dispatch) {
	return {
    	addCount: ()=>{ dispatch({type:'ADDNUM'}) } ,
    	minusCount: ()=>{ dispatch({type:'REDNUM'})},
  	}
}
export default connect(mapStateToProps, mapDisptachToProps)(Header);
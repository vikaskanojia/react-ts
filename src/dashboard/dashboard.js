import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import header from 'header/header'
import footer from 'footer/footer'
import products from 'products/products'


class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = { products:[{pName: "Kurta", price: 200, imgUrl: "/product3_1x.jpg", discount: 20}] };
	}

	logout = () => {
		this.props.history.push('/')
	}

	render() {
		return (
				<Fragment>
					<header></header>
					<products products={this.state.products}></products>
					<footer></footer>
					
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
export default connect(mapStateToProps, mapDisptachToProps)(Dashboard);

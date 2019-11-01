import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Footer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <Fragment>
                    <footer className="product-footer">
                        <div className="container clearfix">
                            <div className="grid">
                                <h4>Shops</h4>
                                <ul>
                                    <li><a href="">New In</a></li>
                                    <li><a href="">Women</a></li>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Shoes</a></li>
                                    <li><a href="">Bags & Accessories</a></li>
                                    <li><a href="">Top Brands</a></li>
                                    <li><a href="">Sale & Special Offers</a></li>
                                    <li><a href="">Lookbook</a></li>
                                </ul>
                            </div>
                            <div className="grid">
                                <h4>SHOPS</h4>
                                <ul>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Customer Service</a></li>
                                    <li><a href="">New Collection</a></li>
                                    <li><a href="">Best Sellers</a></li>
                                    <li><a href="">Manufacturers</a></li>
                                    <li><a href="">Privacy policy</a></li>
                                    <li><a href="">Terms & condition</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </div>
                            <div className="grid">
                                <h4>INFORMATION</h4>
                                <ul>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Customer Service</a></li>
                                    <li><a href="">New Collection</a></li>
                                    <li><a href="">Best Sellers</a></li>
                                    <li><a href="">Manufacturers</a></li>
                                    <li><a href="">Privacy policy</a></li>
                                    <li><a href="">Terms & condition</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </div>
                            <div className="grid">
                                <h4>Shops</h4>
                                <ul>
                                    <li><a href="">New In</a></li>
                                    <li><a href="">Women</a></li>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Shoes</a></li>
                                    <li><a href="">Bags & Accessories</a></li>
                                    <li><a href="">Top Brands</a></li>
                                    <li><a href="">Sale & Special Offers</a></li>
                                    <li><a href="">Lookbook</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
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
export default connect(mapStateToProps, mapDisptachToProps)(Footer);</main>
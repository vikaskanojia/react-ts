import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Products extends Component {
    constructor(props){
        super(props);
        const prodList = {...props}
    }

    render() {
        return (
                <Fragment>
                    prodList.map((e, i)=>{
                       return( <section className="container clearfix product-list-block" key={i}>
                                <h2 className="product__heading"><span className="product__heading--text">Summer Collection</span></h2>
                                <div className="product-list border">
                                      <div className="product-list__column">
                                          <div className="product-list__column__productCollecttion">
                                            <div className="discount">e.discount</div>
                                            <img src={e.imgURL}>
                                            <button className="btn-Cart"><span>+SHOP NOW</span></button>
                                          </div>
                                      </div>
                                </div>
                            </section>
                        )
                    });
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
export default connect(mapStateToProps, mapDisptachToProps)(Products);</main>
import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import Brands from '../Detail/Brands'
import {onPhone1Render} from '../../Reducer/PhoneReduser'
import {addCount, addPrices} from '../../Reducer/CountReducer'

function Phone1({phones, addPrices, addCount, onPhone1Render, buyNow1, prices, saveId}) {
    useEffect(()=>{
        let phoneString1 = localStorage.getItem('phones1');
        let phoneArray1 = JSON.parse(phoneString1);
        onPhone1Render(phoneArray1);
    },[])
    const changePhone = phones.filter(item=>item.id===saveId);   
    const newChangePhone = changePhone.length !==0?changePhone:'img';
    
    function addToCart(){
        // addPrices(item.price)
        // addCount(1);
    }

    return (
        <div className="row">
            
            <div className="col-md-9">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="changePhone border border-dark p-2">
                                <img src={newChangePhone[0].img} alt=""/>
                            </div>

                        </div>
                        <div className="col-md-8 pl-5 dashboard">
                            <div className="list-group list-group-flush ">
                                <h3 className="list-group-item ">cpu <h6 className="d-inline">{newChangePhone[0].cpu}</h6> </h3>
                                <h3 className="list-group-item ">camera <h6 className="d-inline">{newChangePhone[0].camera}</h6> </h3>
                                <h3 className="list-group-item ">size <h6 className="d-inline">{newChangePhone[0].size}</h6> </h3>
                                <h3 className="list-group-item ">weight <h6 className="d-inline">{newChangePhone[0].weight}</h6> </h3>
                                <h3 className="list-group-item ">display <h6 className="d-inline">{newChangePhone[0].display}</h6> </h3>
                                <h3 className="list-group-item ">battery <h6 className="d-inline">{newChangePhone[0].battery}</h6> </h3>
                                <h3 className="list-group-item ">memory <h6 className="d-inline">{newChangePhone[0].memory}</h6> </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-2 my-4 content">
                        <div className="col-md-9 col-8">
                            <h1>{newChangePhone[0].name}</h1>
                        </div>
                        <div className="col-md-3 col-4"><h1 className="float float-right">${newChangePhone[0].price}</h1></div>
                    </div>
                    <h6 className="mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quae? Reiciendis, iusto velit? Labore ipsam eos soluta quis minima rerum corrupti eaque est obcaecati magni dolore ratione quibusdam, veniam ut?</h6>
                </div>
            </div>
            <div className="col-md-3">
                <h1 className="lead">Quick shop</h1>
                               {
                        buyNow1.length !== 0?
                            <Link to="/baskets" >
                                <button className="btn btn-info text-white  form-control">
                                    {buyNow1.length} item(s) - ${newChangePhone[0].price}
                                </button>
                            
                            </Link>: <button className="btn btn-info form-control text-white text-center">0 item(s) - $0</button>
                    }
                {/* <button className="btn form-control btn-primary">{newChangePhone.length} item($) - ${newChangePhone[0].price}</button> */}
                <h2>{newChangePhone[0].name}</h2>
                <h2>${newChangePhone[0].price}</h2>
                <Link to='/phones'>
                    <button className="form-control text-white btn btn-info my-3">Back to store</button>
                </Link>
 
                <button  onClick={addToCart} className="form-control btn btn-success text-white">Add to cart</button>
            </div>

        </div>
    )
}

const a =(state)=>{ 
    return {
        saveId: state.phones.saveId,
        phones: state.phones.phones,
        buyNow1: state.phones.buyNow1,
        prices: state.count.prices
    }
}

export default connect(a, {onPhone1Render, addCount,addPrices})(Phone1)

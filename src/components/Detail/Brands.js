import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom'
import {setSaveId, setBuyNow1, setCountActive} from '../../Reducer/PhoneReduser';
import { addCount,  addPrices } from '../../Reducer/CountReducer'

function Brands({buyNow1, addCount, prices, addPrices, setBuyNow1, setSaveId, setCountActive, phones, itemBox, search}) {
    // const pricRandom = Math.round(Math.random()*1000);
    const [six, setSix] = useState(6);

    function onClickInfo(item) {
        setSaveId(item.id);
        setBuyNow1(item)

    }
    function setBuyNow2(item) {
        setBuyNow1(item)
        addPrices(item.price)
        addCount(1);
        setCountActive(false)
        
    }

    function loadMore() {
        setSix(prev=>prev+3)
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                {
                phones.filter(sum=>{
                    if(sum.id <= six){
                        return sum
                    }else {
                        return null;
                    }
                }).filter(num=>{
                    if(search == '' ){
                        return num
                    }else if(
                        num.name.toLowerCase().includes(search.toLowerCase())
                    ){
                        return num
                    }
                }).filter(nam=>{
                    if(itemBox=='' || itemBox.name === 'All'){
                        return nam;
                    }else if(nam.name.includes(itemBox.name)){
                        return nam
                    }
                }).map((item, index)=>
                
                    <div key={item.id} className="col-md-12 my-2 col-sm-6 col-lg-6 col-xl-4">
                        <div className="card brand-card-parent">
                            <div className="card">
                                <div className="card-body image-card ">
                                    <img src={item.img} alt="salom"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row my-auto">
                                    <div className="col-md-8 my-auto">
                                        <h4 className="text-primary phone-name lead">{item.name}</h4>
                                    </div>
                                    <div className="col-md-4 pt-1 "><h6 className="price">${item.price}</h6></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eaque.</p>
                                <button  onClick={()=>setBuyNow2(item)} className="btn btn-primary mx-3">Buy Now!</button>
                                <Link to={'/phones/'+item.id}>
                                    <button onClick={()=>onClickInfo(item)} className="btn btn-white border">More info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                )
            }
                </div>

            </div>
           
            <div className="col-md-3 my-4"><button onClick={loadMore} className="btn btn-primary ">Load More</button></div>
        </div>
    )
}
const a =(state)=>{ 
    return {
        buyNow1: state.phones.buyNow1,
        phones: state.phones.phones,
        prices: state.count.prices
    }
}
export default connect(a,{setSaveId, setBuyNow1, addCount, addPrices, setCountActive})(Brands)

import React,{useState, useEffect} from 'react'
import { ImBin } from "react-icons/im";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBuyNow, 
         setCountActiveId,  
         onRenderBasket,
         onRenderBasketDelete,
         setBuyNow,
         setCountActiveTrue } 
from '../../Reducer/PhoneReduser';
import {setPricesRemove,setPricesClose, setPracesZero, onRenderBasketcount, setPricesAdd,countRemove, countAdd,onRenderBasketPrices,} from '../../Reducer/CountReducer'



function Basket({setPricesClose, 
                countRemove,
                setPracesZero,
                countAdd,
                setPricesRemove,
                setPricesAdd,
                buyNow1,
                onRenderBasketcount,
                deleteBuyNow,
                setCountActiveTrue, 
                countActive,
                setCountActiveId, 
                onRenderBasket,
                count, 
                onRenderBasketDelete,
                onRenderBasketPrices,
                setBuyNow, 
                prices}) {

    const [active, setActive] = useState(false)

    useEffect(()=>{
        let phoneString = localStorage.getItem('phones');
        let phoneArray = JSON.parse(phoneString);
        console.log(phoneArray);
        onRenderBasket(phoneArray)
        let pricesString = localStorage.getItem('prices')
        let pricesArray = JSON.parse(pricesString);
        onRenderBasketPrices(pricesArray);
        let countString = localStorage.getItem('count')
        let countArray = JSON.parse(countString);
        onRenderBasketcount(countArray);
    },[])
    
    function onClosePhone(index) {
        const unPrice = buyNow1[index].price;
        setPricesClose(unPrice)
        deleteBuyNow(index)
        let phoneString = localStorage.getItem('phones');
        let phoneArray = JSON.parse(phoneString);
        onRenderBasketDelete(phoneArray, index)

    }

    function clearCart() {
        setBuyNow([])
        setPracesZero(0)
        setActive(prev=>!prev)
    }

    function chackout() {
        alert('salom')
    } 

    function a() {
        const m= 0;

    }

    function addCount(id) {
       countAdd(id)
       const a = buyNow1.map(item=>item.id === id?item.price*2:item.price)[id]
       setPricesAdd(a)
       setCountActiveId(id)
    }
    
    function removeCount(id){
        count[id]-1===0?setCountActiveTrue(id):countRemove(id);
        const a = buyNow1.map(item=>item.id === id?item.price/2:item.price)[id]
        setPricesRemove(a)
    }
    
    return (
        <div className="row my-5">
            <div className="col-md-9">
                <table className="table table-bordered table-hover table-striped">
                    <tbody className="tbody ">
                        {
                            buyNow1.length !== 0 ?  buyNow1.map((item,index)=>
                                
                                <tr>
                                    <div className="row basket">
                                        <div className="col-md-3 col-sm-3 col-12">
                                            <td className="text-center">
                                                <div className="border p-1 basket-img-card">
                                                   <img className="" src={item.img} alt=""/>
                                                </div>
                                            </td>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-3"><td className="basket-text-center mx-auto"><h4 className='basket-phone-name'>{item.name}</h4></td></div>
                                        <div className="col-md-2 col-sm-2 col-2"><td className="basket-text-center mx-auto"><h3>${item.price*count[index]}</h3></td></div>
                                        <div className="col-md-2 col-sm-2 col-5"><td className="basket-text-center mx-auto">
                                            <button onClick={()=>addCount(index)} className="btn  btn-success">+</button>
                                            <h4 className="mx-1">{count[index]}</h4>
                                            <button disabled={countActive[index]} onClick={()=>removeCount(index)} className="btn btn-danger">-</button>
                                        </td></div>
                                        <div className="col-md-1 col-sm-1 col-2">
                                            <td onClick={()=>onClosePhone(index)} className="basket-text-center mx-auto close-in-basket">
                                                <ImBin/>
                                            </td>
                                        </div>
                                    </div>
                                </tr>
                                
                                
                                
                                ): 'Continue shopping tugmasini bosing'
                        }
                    </tbody>
                </table>
                <h3 className="float-right">Total: ${prices}</h3>
            </div>
            <div className="col-md-3">
                <Link to="/phones">
                    <button className="btn btn-info form-control">Continue shopping</button>
                </Link>
                <button disabled={active} onClick={clearCart} className="btn btn-danger form-control my-3">Clear cart</button>
                <button onClick={chackout} disabled={active} className="btn btn-success form-control">Checkout</button>
            </div>
        </div>
    )
}

function a(state) {
    return {
        buyNow1: state.phones.buyNow1,
        countActive: state.phones.countActive,
        prices: state.count.prices,
        count: state.count.count

    }
}

export default connect(a,{deleteBuyNow,
                          onRenderBasketDelete, 
                          onRenderBasketcount, 
                          onRenderBasketPrices, 
                          onRenderBasket, 
                          setPracesZero,
                          setBuyNow, 
                          countRemove, 
                          countAdd, 
                          setPricesRemove, 
                          setPricesAdd, 
                          setPricesClose, 
                          setCountActiveId, 
                          setCountActiveTrue})(Basket)



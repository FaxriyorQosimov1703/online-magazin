import React,{useState} from 'react'
import { Link, Route } from 'react-router-dom';
import Basket from '../Basket/Basket';
import {FaSearch} from 'react-icons/fa'
import { connect } from 'react-redux';


function Sidebar({buyNow1, prices, phones, setItembox, setSearch, setBrands, brands}) {

    const [block, setBlock] = useState('card-brands');
    const [vizible, setVizible] = useState(true)


    const changeBuyNow = phones.filter(itemid=>itemid.id===buyNow1.id)
    function getSearch(e) {
        const a = e.target.value
        setSearch(a)
    }
    function a(event) {
        console.log(event.target.value);
    }

    
    function onChangeBrand(item){

        brands.filter(i=>i.id===item.id)
        setItembox(item)

    }

    function brandsDisplay() {
        vizible?setBlock('displayBlock'):setBlock('card-brands')
        setVizible(prev=>!prev)
    }
 
    return (
        <div>
            <div className="card ">
                <button className="btn btn-info form-control">
                    {
                        buyNow1.length !== 0?
                            <Link to="/baskets" >
                                <button className="btn text-white  form-control">
                                    {buyNow1.length} item(s) - ${prices}
                                </button>
                            
                            </Link>: <h4 className="text-white text-center">0 item(s) - $0</h4>
                    }
                </button>
                <div className="card-header">
                    <h1 className="py-3 lead">Quick shop</h1>
                    <input  onChange={getSearch} type="text" className="form-control my-3 border border-dark"/>
                </div>
            </div>

            <button onClick={brandsDisplay} className="displayBlockandNone "><h4>Brands</h4></button>
            <div className={block}>
                <div className="card my-4">
                <div className="card-header py-4">
                    <h2>Brand</h2>
                    {
                        brands.map(item => 
                            
                                <div key={item.id} className="list-group">
                                    <div onClick={()=>onChangeBrand(item)} className={`list-group-item `} >{item.name}</div>
                                </div>
                            
                            )
                    }

                </div>
            </div>
            </div>

            {/* <Route path="/baskets" render={()=><Basket prices={prices} buyNow={buyNow} phones={phones} />} /> */}
        </div>
    )
}

function a(state) {
    return {
        buyNow1: state.phones.buyNow1,
        phones: state.phones.phones,
        brands: state.phones.brands,
        prices: state.count.prices
    }
}


export default connect(a)(Sidebar)

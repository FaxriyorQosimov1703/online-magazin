import React,{useState} from 'react';
import Brands from './Brands'
import Sidebar from './Sidebar'

function Details() {
    
    const [itemBox, setItembox] = useState('');
    const [search, setSearch] = useState('');
    
    return (
        <div className="row my-3">
            <div className="col-md-6 col-lg-3">
                <Sidebar  setItembox={setItembox}  setSearch={setSearch}   />
            </div> 
             <div className="col-md-6 col-lg-9">
                <Brands itemBox={itemBox}  search={search}  />
            </div>
        </div>
    )
}
export default Details

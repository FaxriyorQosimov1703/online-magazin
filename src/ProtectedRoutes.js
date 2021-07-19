import React, {useState} from 'react'
import Details from './components/Detail/Details';
import {Switch, Route, Link} from 'react-router-dom';
import Phone1 from './components/phones/Phone1'
import Basket from './components/Basket/Basket';

function ProtectedRoutes() {

        const [dNone, setDnone] = useState('d-block');


        function addtoggle() {
                setDnone('d-none')
        }

  return (
    <div className="App">

      <Link to="/phones" onClick={addtoggle} className={dNone}>Details</Link>
      <Switch >
        <Route exact path="/phones" render={()=><Details/>} />
        <Route path="/phones/:id" render={()=><Phone1/>} />
        <Route path="/baskets" render={()=><Basket/>} />
      </Switch>

    </div>
  );
}

export default ProtectedRoutes;
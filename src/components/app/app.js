import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages'
import ShopHeader from '../shop-header'

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cart" exact component={CartPage}/>
            </Switch>
        </main>
    )
};

export default App;
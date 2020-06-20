import React from 'react';
import {Route,Switch} from "react-router-dom";


import './App.css';
import HomePage from "./pages/homepage/homepage.component";

export const Hats=()=>{
    return <div>Hats</div>
}

function App() {
    return (
        <div>
            <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={Hats}  path="/hats" />
            </Switch>
        </div>
    );
}

export default App;

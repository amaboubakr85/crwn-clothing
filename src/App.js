import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";


import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {auth,createUserProfile} from "./firebase/firebase.utils";

// export const Hats=()=>{
//     return <div>Hats</div>
// }

class App extends Component {
    constructor() {
        super();

        this.state={
            currentUser:null
        }
    }

    unsubscribeFromAuth=null;
    componentDidMount(){
     this.unsubscribeFromAuth=auth.onAuthStateChanged(async (userAuth)=>{
            // this.setState({
            //     currentUser:user
            // })
            // console.log(user)
         if(userAuth){
             const userRef=await createUserProfile(userAuth);
             userRef.onSnapshot(snapshot => {
                 // console.log(snapshot.data());
                 this.setState({
                     currentUser:{
                         id:snapshot.id,
                         ...snapshot.data()
                     }
                 },()=>{
                     console.log(this.state)
                 })
             })

         }
 this.setState({
     currentUser:userAuth
 })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route component={HomePage} exact path="/" />
                    <Route component={ShopPage} path="/shop" />
                    <Route component={SignInAndSignUpPage} path="/signin" />
                </Switch>
            </div>
        );
    }
}

export default App;

import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="lgo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={()=>auth.signOut()}>
                            SIGN OUT
                        </div>
                        :
                        <Link to="/signin" className="option">SIGN IN</Link>
                }
            </div>
        </div>
    )
};

const mapStateToProps=(state)=>{
    return {
        currentUser:state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);
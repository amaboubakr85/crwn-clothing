import React, {Component} from "react";
import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfile} from "../../firebase/firebase.utils";

class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password != confirmPassword){
            alert('passwords does not match');
            return;
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfile(user,{displayName});
            this.setState({
                displayName: '',
                password: '',
                confirmPassword: '',
                email: ''
            })
        }catch (e) {
            console.error(e)
        }
    }
    handleChange = (event) => {
        const {name , value}=event.target;
        this.setState({[name]:value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have an account </h2>
                <span>sign up with username and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Display Name"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        type="text"
                        required/>

                    <FormInput
                        label="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        type="email"
                        required/>

                    <FormInput
                        label="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        type="password"
                        required/>

                    <FormInput
                        label="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                        required/>

                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;
import React, {Component} from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    handleSubmit=async (event)=>{
        event.preventDefault();
        const {email , password }=this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: '',
                password: ''
            })

        }catch (e) {
            console.error(e);

        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I Already Have An Account</h2>
                <span>Sign in with your email and password </span>

                <form onSubmit={this.onFormSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange}
                               label='email' required/>

                    <FormInput name="password" type="password" value={this.state.password}
                               handleChange={this.handleChange}
                               label='password' required/>
                            <div className="buttons">
                                <CustomButton type="button"  onClick={this.handleSubmit}>Sign In</CustomButton>
                                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                            </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
import React , {useReducer} from "react";
import './signup.css';
import axios from "axios";
import Countries from '../utils.js/countries.json';
import Footer from './footer';
import {CtaButton} from './services';
import { FormAlerts, Error, FormLegend } from "./create-order";

const reducer=(state, action)=>{

    switch(action.type){

        case "newFirstName":{
            return{
                firstName:action.newFirstName,
                lastName:state.lastName,
                email:state.email,
                dialCode:state.dialCode,
                phoneNumber:state.phoneNumber,
                password:state.password,
                confirmPassword:state.confirmPassword
            }
        }

        case "newLastName":{
            return{
                firstName:state.firstName,
                lastName:action.newLastName,
                email:state.email,
                dialCode:state.dialCode,
                phoneNumber:state.phoneNumber,
                password:state.password,
                confirmPassword:state.confirmPassword
            }
        }

        case "newEmail":{
            return{
                firstName:state.firstName,
                lastName:state.lastName,
                email:action.newEmail,
                dialCode:state.dialCode,
                phoneNumber:state.phoneNumber,
                password:state.password,
                confirmPassword:state.confirmPassword
            }
        }

        case "newDialCode":{
            return{
                firstName:state.firstName,
                lastName:state.lastName,
                email:state.email,
                dialCode:action.newDialCode,
                phoneNumber:state.phoneNumber,
                password:state.password,
                confirmPassword:state.confirmPassword
            }
        }

        case "newPhoneNumber":{
            return{
                firstName:state.firstName,
                lastName:state.lastName,
                email:state.email,
                dialCode:state.dialCode,
                phoneNumber:action.newPhoneNumber,
                password:state.password,
                confirmPassword:state.confirmPassword
            }
        }

        case "newPassword":{
            return{
                firstName:state.firstName,
                lastName:state.lastName,
                email:state.email,
                dialCode:state.dialCode,
                phoneNumber:state.phoneNumber,
                password:action.newPassword,
                confirmPassword:state.confirmPassword
            }
        }

        case "newConfirmPassword":{
            return{
                firstName:state.firstName,
                lastName:state.lastName,
                email:state.email,
                dialCode:state.dialCode,
                phoneNumber:state.phoneNumber,
                password:state.password,
                confirmPassword:action.newConfirmPassword
            }
        }

        default:
    }
}

const RegistrationForm=()=>{
    
    const initialState={
        firstName:"",
        lastName:"",
        email:"",
        dialCode:"",
        phoneNumber:"",
        password:"",
        confirmPassword:""
    }

    const [state, dispatch]=useReducer(reducer, initialState);

    let countryCode=Countries.map(code=>{
        return <option key={code.code} value={code.dial_code}>{` ${code.emoji} ${code.name} (${code.dial_code})`}</option>
    })

    const handleWheel=(e)=>{

        e.target.blur();

        e.stopPropagation();
    }

    const handleFirstNameChange=(e)=>{

        dispatch({
            type:"newFirstName",
            newFirstName:e.target.value
        })
    }

    const handleLastNameChange=(e)=>{

        dispatch({
            type:"newLastName",
            newLastName:e.target.value
        })
    }

    const handleEmailChange=(e)=>{

        dispatch({
            type:"newEmail",
            newEmail:e.target.value
        })
    }

    const handleDialCodeChange=(e)=>{

        dispatch({
            type:"newDialCode",
            newDialCode:e.target.value
        })
    }

    const handlePhoneChange=(e)=>{

        dispatch({
            type:"newPhoneNumber",
            newPhoneNumber:e.target.value
        })
    }

    const handlePasswordChange=(e)=>{

        dispatch({
            type:"newPassword",
            newPassword:e.target.value
        })
    }

    const handleConfirmationChange=(e)=>{

        dispatch({
            type:"newConfirmPassword",
            newConfirmPassword:e.target.value
        })
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        
        alert(JSON.stringify(state));
    }

    return(
        <React.Fragment>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="required">First name</label>
                    <div>
                        <input type="text" value={state.firstName} onChange={handleFirstNameChange}  required></input>
                    </div>
                </div>
                <div className="input-group">
                    <label className="required">Last name</label>
                    <div>
                        <input type="text" value={state.lastName} onChange={handleLastNameChange} required ></input>
                    </div>
                </div>
                <div className="input-group">
                    <label className="required">Email</label>
                    <div>
                        <input type="email" value={state.email} onChange={handleEmailChange} required ></input>
                    </div>
                </div>
                <div className="input-group">
                    <label>
                        Phone Number
                    </label>
                    <div className="code-and-phone">
                        <select value={state.dialCode} onChange={handleDialCodeChange} className="code">
                            <option value={``} hidden disabled >🇦🇫 Afghanistan</option>
                            {countryCode}
                        </select>
                    <input className="phone-number" type="number" onChange={handlePhoneChange} onWheel={handleWheel} ></input>
                    </div>
                </div>
                <div className="input-group">
                    <label className="required">Password</label>
                    <div>
                        <input type="password" value={state.password} onChange={handlePasswordChange}  required></input>
                    </div>
                </div>
                <div className="input-group">
                    <label className="required">Confirm password</label>
                    <div>
                        <input type="password" value={state.confirmPassword} onChange={handleConfirmationChange} required></input>
                    </div>
                </div>
                <FormLegend/>
                <CtaButton type={`submit`} message={`Sign Up`} />
            </form>
        </React.Fragment>
    )
}

const SignUp=()=>{


    return(
        <React.Fragment>
            <section className="section" id='signup-section'>
                <div className="signup">
                    <div className="reg-text"></div>
                    <div className="reg-form">
                        <div className="form-wrapper">
                            <h4 className="signup-header">Sign Up </h4>
                            <RegistrationForm/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}
export default SignUp;
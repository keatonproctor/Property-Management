import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SigninForm extends Component {
    render() {
        return (
            <form className="sign-in-form">
                <FormTitle className="sign-in-form__title" text="Login"/>
                <Field
                    className="sign-in-form__email"
                    placeholder="Email"
                    component={FormInput}
                    name="email"
                    type="email"
                    title="Email"
                />
                <Field
                    className="sign-in-form__password"
                    placeholder="password"
                    component={FormInput}
                    name="password"
                    type="password"
                    title="PassWord"
                />
                <Field
                    className="sign-in-form__login"
                    name="login"
                    type="submit"
                    title="Login"
                    component={FormButton}
                />
            <div className='sign-in-form__text-links'>
                <TextLink to='/forgot' text='Forgot Password'/>
                <TextLink to='/signup' text='Not a member? Register here'/>
            </div>

          </form>
        );
    }
}

SigninForm = reduxForm({
    form: "signin"
})(SigninForm);

export default SigninForm;
import React, { Component } from 'react';

import SignupForm from './signupForm';

    onSubmit = (fields) => {

    }

class Signup extends Component {
    render() {
        return (
            <div className="sign-up">
                <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default Signup;
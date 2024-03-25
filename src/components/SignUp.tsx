import { useReducer } from "react";
import ReactJson from "react-json-view";
import { NavLink } from "react-router-dom";

export function SignUp() {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        console.log({action})
        console.log({state})
        return {
            ...state,
            ...action
        };
    }, {
        name: '',
        email: '',
        password: ''
    });

    return <>
        <div className="auth-page">
            <div className="container page">
                <p><ReactJson src={state} /></p>
                <div className="row">

                    <div className="col-md-6 col-md-offset-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <NavLink to="/login">Have an account?</NavLink>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <form>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Your Name"
                                    onChange={(e) => dispatch({name: e.target.value})}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Email" 
                                    onChange={(e) => dispatch({email: e.target.value})}
                                    />
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" placeholder="Password" 
                                    onChange={(e) => dispatch({password: e.target.value})}
                                    />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                Sign up
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}
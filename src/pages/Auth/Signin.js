import {Link, NavLink} from "react-router-dom";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import useInput from "../../Hooks/useInput";

const Signin = props => {

    const {
        inputValue: emailValue,
        inputIsValid: emailIsValid,
        onInputChange: onEmailChange,
        onInputBlur: onEmailBlur,
    } = useInput(value => value.trim().includes('@'));

    const {
        inputValue: passwordValue,
        inputIsValid: passwordIsValid,
        onInputChange: onPasswordChange,
        onInputBlur: onPasswordBlur,
    } = useInput(value => value.trim().length >= 8);

    const emailIsValidStyles = emailIsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"
    const passwordIsValidStyles = passwordIsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"

    return <form action="" method="post" className="w-25">
        <div>
            <Input
                className={emailIsValidStyles}
                value={emailValue}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
                type="email"
                placeholder="Your email"
            />
        </div>
        <div>
            <Input
                className={passwordIsValidStyles}
                value={passwordValue}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                type="password"
                placeholder="********"
            />
        </div>
        <div>
            <Button type="submit" className="btn btn-success w-100 mt-2 d-block">Login</Button>
        </div>
        <small className="text-light d-block mt-3 text-center nav-link">Don't have an account ? <NavLink to="/auth/signup">Signup</NavLink></small>
    </form>
};
export default Signin;
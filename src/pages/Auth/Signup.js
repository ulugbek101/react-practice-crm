import Input from "../../components/UI/Input";
import {NavLink} from "react-router-dom";
import useInput from "../../Hooks/useInput";

const Signup = props => {
    const {
        inputValue: firstNameValue,
        inputIsValid: firstNameIsValid,
        onInputChange: onFirstNameChange,
        onInputBlur: onFirstNameBlur,
    } = useInput();
    const {
        inputValue: lastNameValue,
        inputIsValid: lastNameIsValid,
        onInputChange: onLastNameChange,
        onInputBlur: onLastNameBlur,
    } = useInput();
    const {
        inputValue: emailValue,
        inputIsValid: emailIsValid,
        onInputChange: onEmailChange,
        onInputBlur: onEmailBlur,
    } = useInput();


    return <form action="" method="post">
        <div>
            <Input
                value={firstNameValue}
                onChange={onFirstNameChange}
                onBlur={onFirstNameBlur}
                type="text"
                placeholder="First Name"
            />
        </div>
        <div>
            <Input
                value={lastNameValue}
                onChange={onLastNameChange}
                onBlur={onLastNameBlur}
                type="text"
                placeholder="Last Name"
            />
        </div>
        <div>
            <Input
                value={emailValue}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
                type="email"
                placeholder="Email address"
            />
        </div>
        <div>
            <Input
                type="password"
                placeholder="Password"
            />
        </div>
        <div>
            <Input
                type="password"
                placeholder="Password confirmation"
            />
        </div>
        <small className="text-light d-block mt-3 text-center nav-link">Don't have an account ? <NavLink to="/auth/signin">Signup</NavLink></small>
    </form>
};
export default Signup;
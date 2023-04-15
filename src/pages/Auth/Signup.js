import Input from "../../components/UI/Input";
import {NavLink} from "react-router-dom";
import useInput from "../../Hooks/useInput";
import Button from "../../components/UI/Button";

const Signup = props => {
    const {
        inputValue: firstNameValue,
        inputIsValid: firstNameIsValid,
        onInputChange: onFirstNameChange,
        onInputBlur: onFirstNameBlur,
    } = useInput(value => value.trim().length > 1);
    const {
        inputValue: lastNameValue,
        inputIsValid: lastNameIsValid,
        onInputChange: onLastNameChange,
        onInputBlur: onLastNameBlur,
    } = useInput(value => value.trim().length > 1);
    const {
        inputValue: emailValue,
        inputIsValid: emailIsValid,
        onInputChange: onEmailChange,
        onInputBlur: onEmailBlur,
    } = useInput(value => value.trim().includes('@'));
    const {
        inputValue: password1Value,
        inputIsValid: password1IsValid,
        onInputChange: onPassword1Change,
        onInputBlur: onPassword1Blur,
    } = useInput(value => value.trim().length >= 8);
    const {
        inputValue: password2Value,
        inputIsValid: password2IsValid,
        onInputChange: onPassword2Change,
        onInputBlur: onPassword2Blur,
    } = useInput(value => value.trim().length >= 8);

    const firstNameIsValidStyles = firstNameIsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"
    const lastNameIsValidStyles = lastNameIsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"
    const emailIsValidStyles = emailIsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"
    const password1IsValidStyles = password1IsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"
    const password2IsValidStyles = password2IsValid === false ? "form-control mt-2 border-danger shadow-0" : "form-control mt-2 shadow-0"

    const passwordsMatch = password1IsValid && password2IsValid && password1Value === password2Value;
    const formIsValid = emailIsValid && firstNameIsValid && lastNameIsValid && passwordsMatch;


    return <form action="" method="post" className="w-25">
        <h1 className="text-light text-center">Signup</h1>
        <div>
            <Input
                className={firstNameIsValidStyles}
                value={firstNameValue}
                onChange={onFirstNameChange}
                onBlur={onFirstNameBlur}
                type="text"
                placeholder="First Name"
            />
        </div>
        <div>
            <Input
                className={lastNameIsValidStyles}
                value={lastNameValue}
                onChange={onLastNameChange}
                onBlur={onLastNameBlur}
                type="text"
                placeholder="Last Name"
            />
        </div>
        <div>
            <Input
                className={emailIsValidStyles}
                value={emailValue}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
                type="email"
                placeholder="Email address"
            />
        </div>
        <div>
            <Input
                className={password1IsValidStyles}
                value={password1Value}
                onChange={onPassword1Change}
                onBlur={onPassword1Blur}
                type="password"
                placeholder="Password"
            />
        </div>
        <div>
            <Input
                className={password2IsValidStyles}
                value={password2Value}
                onChange={onPassword2Change}
                onBlur={onPassword2Blur}
                type="password"
                placeholder="Password confirmation"
            />
        </div>
        <Button disabled={!formIsValid} type="submit" className="text-light btn btn-success mt-2 w-100 d-block">Signup</Button>
        <small className="text-light d-block mt-3 text-center nav-link">Don't have an account ? <NavLink to="/signin">Signin</NavLink></small>
    </form>
};
export default Signup;